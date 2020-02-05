import {
  Controller,
  Get,
  UseGuards,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Request,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as FS from 'fs';
import { v4 } from 'uuid';
import { fromBuffer } from 'file-type';
import { EntityManager } from 'typeorm';
import { Image } from './Entities/image.entity';
import { UsersService } from './Services/Auth/users.service';
import { AuthService } from './Services/Auth/auth.service';
import { getConnection } from 'typeorm';

@Controller()
export class AppController {
  auth: AuthService;
  private users: UsersService;
  constructor(
    private readonly appService: AppService,
    private entityManager: EntityManager,
  ) {}
  /*
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    // return this.auth.validateUser(req.email, req.password);
    // console.log(req.email + ' a ' + req.password);
    // return { email: req.email, password: req.password };
    // return req.user;
  }
*/
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  async saveFile(file: any): Promise<string> {
    const name = v4() + '.' + (await fromBuffer(file.buffer)).ext;
    FS.writeFile(__dirname + '/../public/images/' + name, file.buffer, err => {
      if (err) {
        throw err;
      }
    });
    return name;
  }

  @Post('uploadImage')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<{ imageId: number }> {
    const name = await this.saveFile(file);
    const imageId = await this.saveInDB(name);
    // tslint:disable-next-line: object-literal-shorthand
    return { imageId: imageId };
  }
  async saveInDB(name: string): Promise<number> {
    const image = await this.entityManager.save(Image, { title: name });
    return (image as any).id;
  }

  @Post('uploadImages')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files) {
    files.forEach(file => {
      this.saveFile(file);
    });
  }

  @Put('updateImage')
  async updateImage(@Request() req: any) {
    await getConnection()
      .createQueryBuilder()
      .update(Image)
      .set({
        productImageId: req.productImageId,
      })
      .where('id = :id', { id: req.id })
      .execute();
  }
}

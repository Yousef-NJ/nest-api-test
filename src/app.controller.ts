import {
  Controller,
  Get,
  UseGuards,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as FS from 'fs';
import { v4 } from 'uuid';
import { fromBuffer } from 'file-type';
import { EntityManager } from 'typeorm';
import { Image } from './Entities/image.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private entityManager: EntityManager,
  ) {}

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
}

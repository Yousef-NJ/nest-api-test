import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entities/user.entity';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/services/user/user.service';
import { UsersService } from 'src/Services/Auth/users.service';

@Module({providers: [ UserService , UsersService] , exports: [ UserService , UsersService ] , imports: [TypeOrmModule.forFeature([UserEntity])] ,
    controllers: [UserController]})
export class UsersModule {
}

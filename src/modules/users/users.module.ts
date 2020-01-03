import { Module } from '@nestjs/common';
import { UsersService } from 'src/Services/Auth/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entities/user.entity';

@Module({providers: [ UsersService ] , exports: [ UsersService ] , imports: [TypeOrmModule.forFeature([UserEntity])]})
export class UsersModule {
}

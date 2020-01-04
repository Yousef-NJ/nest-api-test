import { Module } from '@nestjs/common';
import { ImageService } from 'src/services/image/image.service';
import { Image } from 'src/Entities/image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from 'src/controllers/image/image.controller';

@Module({providers: [ ImageService ] , exports: [ ImageService ] , imports: [TypeOrmModule.forFeature([Image])] , controllers: [ImageController]})
export class ImageModule {}

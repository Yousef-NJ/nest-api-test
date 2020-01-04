import { Module } from '@nestjs/common';
import { CategoryService } from 'src/services/category/category.service';
import { Category } from 'src/Entities/category.entity';
import { CategoryController } from 'src/controllers/category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({providers: [ CategoryService ] , exports: [ CategoryService ] , imports: [TypeOrmModule.forFeature([Category])] ,
     controllers: [CategoryController]})
export class CategoryModule {}

import { Module } from '@nestjs/common';
import { ProductService } from 'src/Services/product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/Entities/product.entity';
import { ProductController } from 'src/controllers/product/product.controller';

@Module({providers: [ ProductService ] , exports: [ ProductService ] , imports: [TypeOrmModule.forFeature([Product])] ,
     controllers: [ProductController]})
export class ProductModule {}

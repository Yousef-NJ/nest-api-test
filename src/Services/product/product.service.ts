import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Entities/product.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ProductService extends TypeOrmCrudService <Product> {
    constructor(@InjectRepository(Product) repo) {
        super(repo);
    }
}

import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProductToShoppingCart } from 'src/Entities/productToShoppingCatr.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductToShoppingCartService extends TypeOrmCrudService<
  ProductToShoppingCart
> {
  constructor(@InjectRepository(ProductToShoppingCart) repo) {
    super(repo);
  }
}

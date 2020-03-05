import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductToOrder } from 'src/Entities/productToOrder.entity';

@Injectable()
export class ProductToOrderService extends TypeOrmCrudService<ProductToOrder> {
  constructor(@InjectRepository(ProductToOrder) repo) {
    super(repo);
  }
}

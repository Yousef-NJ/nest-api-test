import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ShoppingCart } from 'src/Entities/ShoppingCart.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShoppingCartService extends TypeOrmCrudService <ShoppingCart> {
    constructor(@InjectRepository(ShoppingCart) repo) {
        super(repo);
      }}

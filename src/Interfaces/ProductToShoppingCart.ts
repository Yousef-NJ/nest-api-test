import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ShoppingCart } from './ShoppingCart';
import { Products } from './product';

export class ProductToShoppingCart {
  public productToShoppingCart!: number;

  public product: Products;

  public shoppingCart: ShoppingCart;
}

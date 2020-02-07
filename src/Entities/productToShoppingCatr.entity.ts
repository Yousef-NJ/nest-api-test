import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ShoppingCart } from './ShoppingCart.entity';
import { Product } from './product.entity';

@Entity()
export class ProductToShoppingCart {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(
    type => Product,
    product => product.id,
  )
  public product: Product;

  @ManyToOne(
    type => ShoppingCart,
    shoppingCart => shoppingCart.id,
  )
  public shoppingCart: ShoppingCart;
}

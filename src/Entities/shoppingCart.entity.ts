import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { Product } from './product.entity';
import { ProductToShoppingCart } from './productToShoppingCatr.entity';

@Entity({name: 'ShoppingCart'})
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => UserEntity)
  @JoinColumn()
  user: UserEntity;
/*TODO MANY TO MANY */
  @OneToOne(type => Product)
  @JoinColumn()
  products: Product;

  @OneToMany(type => ProductToShoppingCart, productToShoppingCart => productToShoppingCart.shoppingCart)
  public porductToShoppingCart: ProductToShoppingCart[];
}

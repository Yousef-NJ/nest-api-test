import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { Product } from './product.entity';

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
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { Product } from './product.entity';

@Entity({ name: 'ShoppingCart' })
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @ManyToMany(type => Product, { cascade: true })
  @JoinTable({
    name: 'product_cart',
    joinColumn: { name: 'cartId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
  })
  public product: Product[];
}

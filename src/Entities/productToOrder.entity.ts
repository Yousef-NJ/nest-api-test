import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './product.entity';
import { Order } from './order.entity';

@Entity()
export class ProductToOrder {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(
    type => Product,
    product => product.id,
  )
  public product: Product;

  @ManyToOne(
    type => Order,
    order => order.id,
  )
  public order: Order;

  @Column({ default: 1 })
  public quantity: number;
}

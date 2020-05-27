import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'DiscountCode' })
export class DiscountCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  code: string;

  @Column('float')
  percentage: number;

  @OneToMany(
    type => Order,
    order => order.discountCode,
  )
  public orderDiscountCode: Order;
}

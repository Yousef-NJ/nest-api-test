import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { UserEntity } from './user.entity';
import { DiscountCode } from './discountCode.entity';

enum orderStatus {
  Canceled,
  Delivered,
  Shipped,
  Processing,
  Waiting,
}

@Entity({name: 'Order'})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ length: 100 })
  titleArabic: string;

  @Column('text')
  shippingAddress: string;

  @Column('text')
  billingAddress: string;

  @Column('text')
  paymentMethod: string;

  @Column()
  discount: number;

  @Column()
  totalPrice: number;

  @Column()
  Status: orderStatus;

    @OneToOne(type => Category)
    @JoinColumn()
    category: Category;

    @OneToOne(type => DiscountCode)
    @JoinColumn()
    discountCode: DiscountCode;
}
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Category } from './category.entity';
import { UserEntity } from './user.entity';
import { DiscountCode } from './discountCode.entity';
import { Product } from './product.entity';

enum orderStatus {
  PINDING,
  PROSSISING,
  SHIPPED,
  CANCELED,
}

@Entity({ name: 'Order' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  shippingAddress: string;

  @Column('text')
  email: string;

  @Column('text')
  phone: string;

  @Column('text')
  city: string;

  @Column('text')
  country: string;

  @Column('text')
  note: string;

  @Column('text')
  paymentMethod: string;

  @Column('float')
  discount: number;

  @Column('float')
  totalPrice: number;

  @Column()
  status: orderStatus;

  @Column()
  date: Date;

  @ManyToOne(
    type => Category,
    category => category.orderCategory,
  )
  public categoryOrdar: Category;

  @ManyToOne(
    type => DiscountCode,
    discountCode => discountCode.orderDiscountCode,
  )
  public discountCode: Category;

  @ManyToMany(type => Product, { cascade: true })
  @JoinTable({
    name: 'product_order',
    joinColumn: { name: 'orderId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
  })
  public product: Product[];

  @ManyToOne(
    type => UserEntity,
    user => user.orderForUser,
  )
  public userOrder: UserEntity;
}

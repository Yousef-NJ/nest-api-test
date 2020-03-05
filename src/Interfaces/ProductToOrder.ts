import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/Entities/product.entity';
import { Order } from 'src/Entities/order.entity';

export class ProductToOrder {
  public id: number;

  public product: Product;

  public order: Order;

  public quantity: number;
}

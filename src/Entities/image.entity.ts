import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @ManyToOne(type => Product , product => product.productImage)
  public productImage: Product;
}

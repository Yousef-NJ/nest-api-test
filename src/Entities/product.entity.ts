import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Category } from './category.entity';
import { Image } from './image.entity';
import { ProductToShoppingCart } from './productToShoppingCatr.entity';

@Entity({ name: 'Product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titleEnglish: string;

  @Column({ length: 100 })
  titleArabic: string;

  @Column('text')
  descriptionEnglish: string;

  @Column('text')
  descriptionArabic: string;

  @Column()
  availability: number;

  @Column('float')
  priceJD: number;

  @Column('float')
  priceSAR: number;

  @Column()
  categoryProductId: number;

  @OneToMany(
    type => ProductToShoppingCart,
    productToShoppingCart => productToShoppingCart.product,
  )
  public productToShoppingCart: ProductToShoppingCart[];

  @OneToMany(
    type => Image,
    image => image.productImage,
  )
  public productImage: Image[];

  @ManyToOne(
    type => Category,
    category => category.productCategory,
  )
  public categoryProduct: Category;
}

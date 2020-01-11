import { Image } from './image.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Product } from './product.entity';
@Entity()
export class Category {
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
  imageId: number;

  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;

  @OneToMany(
    type => Product,
    product => product.categoryProduct,
  )
  productCategory: Product;
}

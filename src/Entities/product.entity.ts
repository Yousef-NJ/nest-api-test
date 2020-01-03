import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity({name: 'Product'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 , unique: true})
  titleEnglish: string;

  @Column({ length: 100 })
  titleArabic: string;

  @Column('text')
  descriptionEnglish: string;

  @Column('text')
  descriptionArabic: string;

  @Column()
  availability: number;

  @Column()
  priceJD: number;

  @Column()
  priceSAR: number;

    @OneToOne(type => Category)
    @JoinColumn()
    category: Category;
}

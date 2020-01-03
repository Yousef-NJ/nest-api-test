import { Image } from './image.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(type => Image)
  @JoinColumn()
  image: Image;
}

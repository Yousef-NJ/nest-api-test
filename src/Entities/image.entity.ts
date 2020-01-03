import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;
}

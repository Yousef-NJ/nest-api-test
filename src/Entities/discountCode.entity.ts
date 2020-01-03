import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';

@Entity({name: 'DiscountCode'})
export class DiscountCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  code: string;

  @Column()
  Percentage: number;
}

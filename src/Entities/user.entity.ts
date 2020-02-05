import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

export enum Roles {
  main_admin = 'main_admin',
  sub_admin = 'sub_admin',
  user = 'user',
}

export enum Status {
  active = 'active',
  blocked = 'blocked',
}
@Entity({ name: 'Users' })
@Unique(['email', 'mobile'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100, nullable: true })
  country: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100, nullable: true })
  confirmPassword: string;

  @Column({ length: 100, nullable: true, unique: true })
  mobile: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.active,
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.user,
  })
  Role: Roles;

  @OneToOne(type => Category)
  @JoinColumn()
  category: Category;
}

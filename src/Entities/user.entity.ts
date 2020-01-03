import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

enum Roles {
    main_admin = 'main_admin',
    sub_admin = 'sub_admin',
    user = 'user',
    }

@Entity({name: 'Users'})
@Unique(['email' , 'mobile'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 , unique: true})
  name: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 , unique: true})
  email: string;

  @Column({ length: 100 , nullable: true , unique: true })
  mobile: string;

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

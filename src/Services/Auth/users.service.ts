import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../Interfaces/users';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../Entities/user.entity';
import { Repository } from 'typeorm';
import { assert } from 'console';
import { Roles, Status } from '../../Entities/user.entity';

@Injectable()
export class UsersService {
  private users: UserEntity[];
  constructor(
    @InjectRepository(UserEntity) private UserRepo: Repository<UserEntity>,
  ) {
    this.users = [];
    this.users = this.getUsers();
  }

  getUsers(): any {
    Promise.resolve(this.UserRepo.find())
      .then((result: UserEntity[]) => {
        return result;
      })
      .catch(error => {
        // console.error(error);
      });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.UserRepo.findOne({
      where: {
        email: email,
      },
    });
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.UserRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(user: User) {
    return this.UserRepo.save(user);
  }

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.email === email);
  }
}
/*
    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
*/

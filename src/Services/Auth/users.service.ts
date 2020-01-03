import { Injectable } from '@nestjs/common';
import { User } from '../../Interfaces/users';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity} from '../../Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor(@InjectRepository(UserEntity) private UserRepo: Repository<UserEntity>) {}

  async create(user: User) {
    return this.UserRepo.save(user);
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
}

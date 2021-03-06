import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserEntity } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService <UserEntity> {
    constructor(@InjectRepository(UserEntity) repo: Repository<UserEntity>) {
        super(repo);
      }
}

import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Category } from 'src/Entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService <Category> {
    constructor(@InjectRepository(Category) repo) {
        super(repo);
      } }

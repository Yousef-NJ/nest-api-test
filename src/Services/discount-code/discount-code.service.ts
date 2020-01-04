import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DiscountCode } from 'src/Entities/discountCode.entity';

@Injectable()
export class DiscountCodeService extends TypeOrmCrudService <DiscountCode> {
    constructor(@InjectRepository(DiscountCode) repo) {
        super(repo);
      }}

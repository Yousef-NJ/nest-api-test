import { Module } from '@nestjs/common';
import { DiscountCodeService } from 'src/services/discount-code/discount-code.service';
import { DiscountCode } from 'src/Entities/discountCode.entity';
import { DiscountCodeController } from 'src/controllers/discount-code/discount-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({providers: [ DiscountCodeService ] , exports: [ DiscountCodeService ] , imports: [TypeOrmModule.forFeature([DiscountCode])] ,
    controllers: [DiscountCodeController]})
export class DiscountCodeModule {}

import { Module } from '@nestjs/common';
import { OrderService } from 'src/Services/order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/Entities/order.entity';
import { OrderController } from 'src/controllers/order/order.controller';

@Module({providers: [ OrderService ] , exports: [ OrderService ] , imports: [TypeOrmModule.forFeature([Order])] , controllers: [OrderController]})
export class OrderModule {}

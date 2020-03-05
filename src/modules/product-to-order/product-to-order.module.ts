import { Module } from '@nestjs/common';
import { ProductToOrderService } from 'src/services/product-to-order/product-to-order.service';
import { ProductToOrder } from 'src/Entities/productToOrder.entity';
import { ProductToOrderController } from 'src/controllers/product-to-order/product-to-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ProductToOrderService],
  exports: [ProductToOrderService],
  imports: [TypeOrmModule.forFeature([ProductToOrder])],
  controllers: [ProductToOrderController],
})
export class ProductToOrderModule {}

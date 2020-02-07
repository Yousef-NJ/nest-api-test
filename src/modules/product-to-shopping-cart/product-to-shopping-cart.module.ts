import { Module } from '@nestjs/common';
import { ProductToShoppingCartService } from 'src/Services/product-to-shopping-cart/ProductToShoppingCartService.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductToShoppingCart } from 'src/Entities/productToShoppingCatr.entity';
import { ProductToShoppingCartController } from 'src/controllers/product-to-shopping-cart/product-to-shopping-cart.controller';

@Module({
  providers: [ProductToShoppingCartService],
  exports: [ProductToShoppingCartService],
  imports: [TypeOrmModule.forFeature([ProductToShoppingCart])],
  controllers: [ProductToShoppingCartController],
})
export class ProductToShoppingCartModule {}

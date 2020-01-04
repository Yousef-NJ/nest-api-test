import { Module } from '@nestjs/common';
import { ShoppingCartService } from 'src/services/shopping-cart/shopping-cart.service';
import { ShoppingCart } from 'src/Entities/ShoppingCart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartController } from 'src/controllers/shopping-cart/shopping-cart.controller';

@Module({providers: [ ShoppingCartService ] , exports: [ ShoppingCartService ] , imports: [TypeOrmModule.forFeature([ShoppingCart])] ,
    controllers: [ShoppingCartController]})
export class ShoppingCartModule {}

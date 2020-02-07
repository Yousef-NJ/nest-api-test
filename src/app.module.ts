import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './Entities/user.entity';
import { Category } from './Entities/category.entity';
import { Image } from './Entities/image.entity';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './Services/Auth/auth.module';
import { RegistrationController } from './controllers/registration/registration.controller';
import { Order } from './Entities/order.entity';
import { Product } from './Entities/product.entity';
import { ShoppingCart } from './Entities/ShoppingCart.entity';
import { DiscountCode } from './Entities/discountCode.entity';
import { ProductService } from './Services/product/product.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductModule } from './modules/product/product.module';
import { ImageService } from './services/image/image.service';
import { ImageController } from './controllers/image/image.controller';
import { ImageModule } from './modules/image/image.module';
import { CategoryService } from './services/category/category.service';
import { CategoryController } from './controllers/category/category.controller';
import { CategoryModule } from './modules/category/category.module';
import { DiscountCodeService } from './services/discount-code/discount-code.service';
import { DiscountCodeController } from './controllers/discount-code/discount-code.controller';
import { DiscountCodeModule } from './modules/discount-code/discount-code.module';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { ShoppingCartController } from './controllers/shopping-cart/shopping-cart.controller';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { OrderModule } from './modules/order/order.module';
import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './Services/order/order.service';
import { ProductToShoppingCart } from './Entities/productToShoppingCatr.entity';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { ProductToShoppingCartModule } from './modules/product-to-shopping-cart/product-to-shopping-cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'Sallatiy',
      entities: [
        UserEntity,
        Category,
        Image,
        Product,
        Order,
        ShoppingCart,
        DiscountCode,
        ProductToShoppingCart,
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    OrderModule,
    ProductModule,
    ImageModule,
    CategoryModule,
    DiscountCodeModule,
    ShoppingCartModule,
    ProductToShoppingCartModule,
  ],
  controllers: [AppController, RegistrationController, AuthController],
  providers: [AppService],
})
export class AppModule {}

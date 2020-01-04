import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ShoppingCart } from 'src/Entities/ShoppingCart.entity';
import { ShoppingCartService } from 'src/services/shopping-cart/shopping-cart.service';

@Crud({
    model: {
      type: ShoppingCart,
    },
  })
@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(public service: ShoppingCartService) {}
}

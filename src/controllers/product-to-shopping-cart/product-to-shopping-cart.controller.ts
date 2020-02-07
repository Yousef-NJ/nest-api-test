import { Controller } from '@nestjs/common';
import { ProductToShoppingCartService } from 'src/Services/product-to-shopping-cart/ProductToShoppingCartService.service';
import { Crud } from '@nestjsx/crud';
import { ProductToShoppingCart } from 'src/Entities/productToShoppingCatr.entity';

@Crud({
  model: {
    type: ProductToShoppingCart,
  },
})
@Controller('product-to-shopping-cart')
export class ProductToShoppingCartController {
  constructor(public service: ProductToShoppingCartService) {}
}

import { Controller } from '@nestjs/common';
import { ProductToOrder } from 'src/Entities/productToOrder.entity';
import { Crud } from '@nestjsx/crud';
import { ProductToOrderService } from 'src/services/product-to-order/product-to-order.service';

@Crud({
  model: {
    type: ProductToOrder,
  },
  query: {
    join: { product: { eager: true } },
  },
})
@Controller('product-to-order')
export class ProductToOrderController {
  constructor(public service: ProductToOrderService) {}
}

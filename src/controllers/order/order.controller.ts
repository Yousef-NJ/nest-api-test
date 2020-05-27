import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Order } from 'src/Entities/order.entity';
import { OrderService } from 'src/Services/order/order.service';

@Crud({
  model: {
    type: Order,
  },
  query: {
    join: {
      categoryOrdar: { eager: true },
      discountCode: { eager: true },
      product: { eager: true },
      userOrder: { eager: true },
    },
  },
})
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) {}
}

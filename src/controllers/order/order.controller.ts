import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Order } from 'src/Entities/order.entity';
import { OrderService } from 'src/Services/order/order.service';

@Crud({
    model: {
      type: Order,
    },
  })
@Controller('order')
export class OrderController {
    constructor(public service: OrderService) {}
}

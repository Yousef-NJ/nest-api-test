import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { DiscountCode } from 'src/Entities/discountCode.entity';
import { DiscountCodeService } from 'src/services/discount-code/discount-code.service';

@Crud({
    model: {
      type: DiscountCode,
    },
  })
@Controller('discount-code')
export class DiscountCodeController {
    constructor(public service: DiscountCodeService) {}
}

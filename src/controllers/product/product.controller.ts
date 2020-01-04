import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from 'src/Entities/product.entity';
import { ProductService } from 'src/Services/product/product.service';

@Crud({
    model: {
      type: Product,
    },
  })
@Controller('product')
export class ProductController {
    constructor(public service: ProductService) {}
}

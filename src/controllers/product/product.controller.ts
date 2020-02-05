import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from 'src/Entities/product.entity';
import { ProductService } from 'src/Services/product/product.service';
import { Image } from 'src/Entities/image.entity';

@Crud({
  model: {
    type: Product,
  },
  query: {
    limit: 10,
    alwaysPaginate: true,
    join: { productImage: { eager: true } },
  },
})
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) {}
}

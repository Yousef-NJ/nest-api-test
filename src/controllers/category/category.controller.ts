import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Category } from 'src/Entities/category.entity';
import { CategoryService } from 'src/services/category/category.service';

@Crud({
  model: {
    type: Category,
  },
  query: {
    limit: 10,
    alwaysPaginate: true,
    join: { image: { eager: true } },
  },
})
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}
}

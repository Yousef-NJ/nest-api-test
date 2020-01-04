import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Category } from 'src/Entities/category.entity';
import { CategoryService } from 'src/services/category/category.service';

@Crud({
    model: {
      type: Category,
    },
  })
@Controller('category')
export class CategoryController {
    constructor(public service: CategoryService) {}
}

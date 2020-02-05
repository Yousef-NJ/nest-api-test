import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UserEntity } from 'src/Entities/user.entity';
import { UserService } from 'src/services/user/user.service';

@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    join: { category: { eager: true } },
  },
})
@Controller('users')
export class UserController {
  constructor(public service: UserService) {}
}

import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/Interfaces/users';
import { UsersService } from 'src/Services/Auth/users.service';

@Controller('registration')
export class RegistrationController {

    constructor(private userService: UsersService) {}
    @Post()
    async registr(@Body() user: User): Promise<User> {
        await this.userService.create(user);
        return user;
    }
}

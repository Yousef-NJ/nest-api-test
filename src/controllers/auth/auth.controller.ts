import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/Services/Auth/auth.service';
import { User } from 'src/Interfaces/users';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('loginz')
  async login(@Body() user: User): Promise<any> {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: User): Promise<any> {
    return this.authService.register(user);
  }
}

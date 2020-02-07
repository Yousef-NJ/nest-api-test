import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/Interfaces/users';
import { UserEntity } from 'src/Entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private async validate(userData: User): Promise<UserEntity> {
    return await this.usersService.findByEmail(userData.email);
  }

  public async login(user: User): Promise<any | { status: number }> {
    return await this.validate(user).then(userData => {
      if (!userData) {
        return { status: 404 };
      }
      if (userData.password !== user.password) {
        return { status: 404 };
      }
      const payload = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        country: userData.country,
        password: userData.password,
        mobile: userData.mobile,
        status: userData.status,
        Role: userData.Role,
        category: userData.category,
      };
      const accessToken = this.jwtService.sign(payload, { expiresIn: 60 });

      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200,
      };
    });
  }

  public async register(user: User): Promise<any> {
    return this.usersService.create(user);
  }
  /*
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
*/
}

import { Module } from '@nestjs/common';
import { AuthService } from '../../Services/Auth/auth.service';
import { LocalStrategy } from '../../Services/Auth/local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../Services/Auth/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entities/user.entity';
import { UserService } from 'src/services/user/user.service';
import { UsersService } from 'src/Services/Auth/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789',
      // secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, UserService, UsersService],
  exports: [AuthService],
})
export class AuthModule {}

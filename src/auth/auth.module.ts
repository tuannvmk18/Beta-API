import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthControler } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '30 days' },
    }),
  ],
  controllers: [AuthControler],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

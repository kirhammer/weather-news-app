import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule, PassportModule],
  controllers: [AuthController]
})
export class AuthModule {}

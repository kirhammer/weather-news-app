import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { Request as RequestInfo } from 'express';

import { JwtAuthGuard } from '@modules/auth/passport-config/jwt-auth.guard';

import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req: RequestInfo): User {
    return req.user as User;
  }
}

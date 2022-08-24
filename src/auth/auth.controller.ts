import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as RequestInfo } from 'express';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: RequestInfo): Promise<{
    accessToken: string;
  }> {
    return this.authService.login(req.user as User);
  }
}

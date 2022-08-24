import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}

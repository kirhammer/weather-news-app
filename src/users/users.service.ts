import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async findOne(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}

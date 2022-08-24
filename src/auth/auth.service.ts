import { Injectable } from '@nestjs/common';

import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}

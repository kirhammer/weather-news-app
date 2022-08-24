import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private dataSource: DataSource) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.dataSource.getRepository(User).findOne({
      where: {
        email,
      },
    });
  }
}

import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return this.dataSource.getRepository(User).find();
  }
}

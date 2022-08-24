import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    service = new UsersService(UsersRepository.prototype);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

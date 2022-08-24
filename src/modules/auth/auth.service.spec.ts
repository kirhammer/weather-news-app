import { UsersRepository } from '@modules/users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    service = new AuthService(UsersRepository.prototype, JwtService.prototype);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

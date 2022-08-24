import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    controller = new AuthController(AuthService.prototype);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

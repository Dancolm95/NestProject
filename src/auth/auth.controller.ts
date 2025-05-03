import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/Entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user: User = await this.authService.validateUser(
      body.email,
      body.password
    );
    return this.authService.login(user);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from 'src/users/dto/userResponse';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}
  async login(
    email: string,
    password: string
  ): Promise<{ access_token: string; user: UserResponseDto }> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _, ...rest } = user;
      const payload = { sub: user.id, email: user.email };
      return {
        access_token: this.jwtService.sign(payload),
        user: rest,
      };
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }
}

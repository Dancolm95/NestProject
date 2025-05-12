import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from 'src/users/dto/userResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/Entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private userService: UsersService,
    private jwtService: JwtService
  ) { }
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
  async register(
    email: string,
    password: string
  ): Promise<{ message: string }> {
    const existing = await this.usersRepository.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('El usuario ya existe');
    }

    const hashed = await bcrypt.hash(password, 10);
    const nuevoUsuario = this.usersRepository.create({
      email,
      password: hashed,
    });
    await this.usersRepository.save(nuevoUsuario);

    return { message: 'Usuario creado correctamente' };
  }
}

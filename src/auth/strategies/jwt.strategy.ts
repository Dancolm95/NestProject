import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthenticatedUser } from '../types/auth.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwt_super_secreto', // el mismo que en el módulo
    });
  }

  async validate(payload: any): Promise<AuthenticatedUser> {
    console.log('Payload validado:', payload);
    return { sub: payload.sub, email: payload.email, role: payload.role };
  }
}

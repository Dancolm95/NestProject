import { Request } from 'express';
import { AuthenticatedUser } from './user-from-jwt.interfaces';

export interface AuthRequest extends Request {
  user: AuthenticatedUser;
}

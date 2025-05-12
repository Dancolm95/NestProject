export interface AuthenticatedRequest {
  user: {
    userId: number;
    email: string;
    // cualquier otro campo que devuelvas desde JwtStrategy
  };
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ahora = Date.now();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    return next.handle().pipe(
      tap(() => {
        const plazo = Date.now() - ahora;
        console.log(`[${method}] ${url} - tiempo de ejecucion ${plazo}ms`);
      })
    );
  }
}

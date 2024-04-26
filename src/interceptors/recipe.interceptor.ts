import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JWTAuth, Constants } from 'src/utils';

@Injectable()
export class RecipeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const auth = context.getArgs()[0]?.headers?.authorization;
    if (auth !== '' && auth !== undefined) {
      const jwt = JWTAuth.readToken(auth)?.permissions;
      const main = jwt.filter(x => (x.actions.code === Constants.MODULES.RECIPES));
      if (main.length === 0) {
        throw new ForbiddenException('Access denied, there is not enough permissions to this action');
      }
    }
    return next.handle();
  }
}
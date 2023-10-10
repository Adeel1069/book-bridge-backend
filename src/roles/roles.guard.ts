import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { user } = context.switchToHttp().getRequest();
    if (user && user.role === Role.Admin) {
      return true;
    } else {
      throw new UnauthorizedException(
        'You do not have the authorization to perform this action.',
      );
    }
  }
}

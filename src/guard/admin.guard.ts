import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const isAdmin = user.isAdmin;
    if (isAdmin) {
      return true;
    }

    throw new HttpException(
      'Unauthorized access, this is only admin permission',
      HttpStatus.UNAUTHORIZED,
    );
  }
}

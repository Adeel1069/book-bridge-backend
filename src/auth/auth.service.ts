import { BadRequestException, Injectable } from '@nestjs/common';
import { SingIn } from './interfaces/auth.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async singIn({ email, pass }: SingIn): Promise<any> {
    const user = await this.usersService.findOne({ email });

    if (!user || user?.password !== pass) {
      throw new BadRequestException('Invalid Credentials');
    }

    const { password, ...result } = user;

    return result;
  }
}

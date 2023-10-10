import { BadRequestException, Injectable } from '@nestjs/common';
import { SingIn } from './interfaces/auth.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn({ email, pass }: SingIn): Promise<any> {
    const user = await this.usersService.findOne({ email });

    if (!user || user?.password !== pass) {
      throw new BadRequestException('Invalid Credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const response = {
      access_token: await this.jwtService.signAsync(payload),
    };
    return response;
  }
}

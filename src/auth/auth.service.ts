import { BadRequestException, Injectable } from '@nestjs/common';
import { SingIn } from './interfaces/auth.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordHasher } from 'src/utils/password-hasher.utils';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn({ email, pass }: SingIn): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne({ email });

    const isPasswordMatched = PasswordHasher.comparePasswords(
      pass.toString(),
      user?.password ?? '',
    );

    if (!user || !isPasswordMatched) {
      throw new BadRequestException('Invalid Credentials');
    }

    const payload = { sub: user._id, email: user.email, role: user.role };
    const response = {
      access_token: await this.jwtService.signAsync(payload),
    };
    return response;
  }
}

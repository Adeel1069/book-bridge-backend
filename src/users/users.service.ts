import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IFindOne, IUser } from './interfaces/user.interface';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      username: 'Adeel',
      email: 'hafizadeel493@gmail.com',
      password: 'Adeel123',
      role: Role.Admin,
      dob: 'Mon Oct 09 2023 17:39:22 GMT+0500 (Pakistan Standard Time)',
      gender: 'male',
      isSubscribeToNewsLetter: true,
      interest: ['cat_id_1', 'cat_id_2', 'cat_id_2'],
      imageUrl: null,
    },
    {
      id: '2',
      username: 'Khurrum',
      email: 'khurrum@gmail.com',
      password: 'Adeel123',
      role: Role.User,
      dob: 'Mon Oct 09 2023 17:39:22 GMT+0500 (Pakistan Standard Time)',
      gender: 'male',
      isSubscribeToNewsLetter: true,
      interest: ['cat_id_1', 'cat_id_2', 'cat_id_2'],
      imageUrl: null,
    },
  ];

  create(createUserDto: CreateUserDto) {
    return {
      message: 'User added successfully',
      data: createUserDto,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne({ id, email }: IFindOne): Promise<Partial<IUser>> {
    if (!id && !email)
      throw new Error("Either 'id' or 'email' must be provided.");

    const user = this.users.find(
      (user) => user.id === id || user.email === email,
    );

    const { password, ...newUser } = user;
    if (id) return newUser;
    else return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: `This action updates a #${id} user`,
      data: updateUserDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

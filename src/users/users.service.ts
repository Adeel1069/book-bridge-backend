import { ForbiddenException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { IFindOne, IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import config from 'src/config/keys';
import { PasswordHasher } from 'src/utils/password-hasher.utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async create(createUserDto: IUser) {
    const isEmailExist = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (isEmailExist)
      throw new ForbiddenException(
        'Email already exists. Please choose a different email.',
      );

    const hashedPassword = PasswordHasher.hashPassword(
      createUserDto.password,
      config.SALT_ROUNDS,
    );

    createUserDto.password = hashedPassword;

    const newUser = new this.userModel(createUserDto);
    await newUser.save();

    return {
      success: true,
    };
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne({ id, email }: IFindOne): Promise<Partial<IUser>> {
    if (!id && !email)
      throw new Error("Either 'id' or 'email' must be provided.");

    const userById = await this.userModel
      .findOne({ _id: id })
      .select('-password');
    const userByEmail = await this.userModel.findOne({ email });

    if (id) return userById;
    else return userByEmail;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = PasswordHasher.hashPassword(
        updateUserDto.password,
        config.SALT_ROUNDS,
      );
    }
    await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return {
      success: true,
    };
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}

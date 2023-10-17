import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { IFindOne, IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import config from 'src/config/keys';
import { PasswordHasher } from 'src/utils/password-hasher.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel) private userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<{ success: boolean }> {
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

    if (!userById && !userByEmail) throw new NotFoundException();
    if (id) return userById;
    else return userByEmail;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<{ success: boolean }> {
    if (updateUserDto.password) {
      updateUserDto.password = PasswordHasher.hashPassword(
        updateUserDto.password,
        config.SALT_ROUNDS,
      );
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      {
        new: true,
      },
    );

    if (!updatedUser) throw new NotFoundException();
    return {
      success: true,
    };
  }

  async remove(id: string): Promise<{ success: boolean }> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) throw new NotFoundException();
    return {
      success: true,
    };
  }
}

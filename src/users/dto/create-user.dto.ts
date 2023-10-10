import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 20)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 12)
  password: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  dob: Date;

  @IsEnum(Gender)
  gender: Gender;

  @IsBoolean()
  isSubscribeToNewsLetter: boolean;

  @IsArray()
  interest: string[];

  @IsOptional()
  @IsString()
  imageUrl: string;
}

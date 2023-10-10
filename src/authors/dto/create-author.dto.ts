import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @Length(3, 16)
  name: string;

  @IsNotEmpty()
  @Length(3, 20)
  title: string;

  @IsNotEmpty()
  @Length(20, 500)
  bio: string;

  @IsOptional()
  @IsString()
  imageUrl: string;
}

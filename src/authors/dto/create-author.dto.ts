import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @Length(3, 225)
  title: string;

  @IsNotEmpty()
  @Length(16, 1000)
  bio: string;

  @IsOptional()
  @IsString()
  imageUrl: string;
}

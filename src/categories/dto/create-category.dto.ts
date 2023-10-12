import { Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @Length(3, 225)
  @Transform(({ value }) => value.toLowerCase())
  name: string;
}

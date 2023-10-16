import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 1000)
  description: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  publishedAt: Date;

  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsUrl()
  downloadLink: string;

  @IsOptional()
  price: number | null;

  @IsOptional()
  discount: number | null;

  @IsOptional()
  pages: number | null;

  @IsOptional()
  @IsNumber()
  downloads: number;
}

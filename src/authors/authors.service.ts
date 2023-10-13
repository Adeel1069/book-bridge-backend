import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/author.schema';
import { Model } from 'mongoose';
import { IAuthor } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(ModelName) private authorModel: Model<IAuthor>) {}

  async create(
    createAuthorDto: CreateAuthorDto,
  ): Promise<{ success: boolean }> {
    const newAuthor = new this.authorModel(createAuthorDto);
    await newAuthor.save();
    return {
      success: true,
    };
  }

  async findAll(): Promise<IAuthor[]> {
    const Authors = await this.authorModel.find();
    return Authors;
  }

  async findOne(id: string): Promise<IAuthor> {
    const Author = await this.authorModel.findById({ _id: id });
    if (!Author) throw new NotFoundException();
    return Author;
  }

  async update(
    id: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<{ success: boolean }> {
    const updatedAuthor = await this.authorModel.findByIdAndUpdate(
      id,
      updateAuthorDto,
    );
    if (!updatedAuthor) throw new NotFoundException();
    return {
      success: true,
    };
  }

  async remove(id: string): Promise<{ success: boolean }> {
    const deletedAuthor = await this.authorModel.findByIdAndDelete(id);
    if (!deletedAuthor) throw new NotFoundException();
    return {
      success: true,
    };
  }
}

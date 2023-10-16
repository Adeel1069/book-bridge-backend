import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/book.schema';
import { Model } from 'mongoose';
import { IBook } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel(ModelName) private bookModel: Model<IBook>) {}

  async create(createBookDto: CreateBookDto): Promise<{ success: boolean }> {
    const newBook = new this.bookModel(createBookDto);
    await newBook.save();
    return {
      success: true,
    };
  }

  async findAll(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async findOne(id: string): Promise<IBook> {
    const book = await this.bookModel
      .findById({ _id: id })
      .populate('categoryId')
      .populate('autherId');
    if (!book) throw new NotFoundException();
    return book;
  }

  async update(
    id: string,
    updateBookDto: UpdateBookDto,
  ): Promise<{ success: boolean }> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(
      id,
      updateBookDto,
      { new: true },
    );
    if (!updatedBook) throw new NotFoundException();
    return {
      success: true,
    };
  }

  async remove(id: string): Promise<{ success: boolean }> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id);
    if (!deletedBook) throw new NotFoundException();
    return {
      success: true,
    };
  }
}

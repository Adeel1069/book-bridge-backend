import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema, BookModel } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookModel, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

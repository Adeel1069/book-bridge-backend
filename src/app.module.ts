import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config/keys';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    AuthorsModule,
    BooksModule,
    RatingsModule,
    AuthModule,
    MongooseModule.forRoot(config.MONGO_URL),
  ],
})
export class AppModule {}

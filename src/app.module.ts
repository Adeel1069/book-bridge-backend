import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CategoriesModule, AuthorsModule, BooksModule, RatingsModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}

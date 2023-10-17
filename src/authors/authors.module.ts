import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema, AuthorModel } from './schemas/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuthorModel, schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}

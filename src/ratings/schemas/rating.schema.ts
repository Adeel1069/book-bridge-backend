import * as mongoose from 'mongoose';
import { UserModel } from 'src/users/schemas/user.schema';
import { BookModel } from 'src/books/schemas/book.schema';

export const RatingModel = 'Rating';

export const RatingSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String || null,
      default: null,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    bookId: {
      type: mongoose.Schema.ObjectId,
      ref: BookModel,
      required: true,
    },
  },
  { timestamps: true },
);

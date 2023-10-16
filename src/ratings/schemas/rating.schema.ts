import * as mongoose from 'mongoose';
import { ModelName as UserModel } from 'src/users/schemas/user.schema';
import { ModelName as BookModel } from 'src/books/schemas/book.schema';

export const ModelName = 'Rating';

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

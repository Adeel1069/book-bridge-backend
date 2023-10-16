import * as mongoose from 'mongoose';
import { ModelName as AuthorModel } from 'src/authors/schemas/author.schema';
import { ModelName as CategoryModel } from 'src/categories/schemas/category.schema';

export const ModelName = 'Book';

export const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publishedAt: Date,
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: AuthorModel,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CategoryModel,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    downloadLink: {
      type: String,
      required: true,
    },
    price: {
      type: Number || null,
      default: null,
    },
    discount: {
      type: Number || null,
      default: null,
    },
    pages: {
      type: Number || null,
      default: null,
    },
    downloads: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

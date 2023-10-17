import * as mongoose from 'mongoose';

export const AuthorModel = 'Author';

export const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String || null,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

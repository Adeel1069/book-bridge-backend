import * as mongoose from 'mongoose';

export const ModelName = 'Category';

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

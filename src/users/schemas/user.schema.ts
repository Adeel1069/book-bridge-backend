import * as mongoose from 'mongoose';
import { Role } from 'src/roles/role.enum';

export const genderEnum = ['male', 'female', 'other'];

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.User,
    },
    dob: Date,
    gender: {
      type: String,
      enum: genderEnum,
    },
    isSubscribeToNewsLetter: Boolean,
    interest: [String],
    imageUrl: String || null,
  },
  { timestamps: true },
);

import { Document } from 'mongoose';

export class IRating extends Document {
  readonly rating: number;
  readonly comment: string;
  readonly userId: string;
  readonly bookId: string;
}

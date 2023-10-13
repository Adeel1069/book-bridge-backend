import { Document } from 'mongoose';

export class IAuthor extends Document {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly imageUrl?: string | null;
}

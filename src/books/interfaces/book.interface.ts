import { Document } from 'mongoose';

export class IBook extends Document {
  readonly title: string;
  readonly description: string;
  readonly publishedAt: Date;
  readonly authorId: string;
  readonly categoryId: string;
  readonly imageUrl: string;
  readonly downloadLink: string;
  readonly price: number | null;
  readonly discount: number | null;
  readonly pages: number | null;
  readonly downloads: number;
}

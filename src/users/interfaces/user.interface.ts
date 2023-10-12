import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export class IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: Role;
  dob: Date;
  gender: string;
  isSubscribeToNewsLetter: boolean;
  isVerified?: boolean;
  interest: string[];
  imageUrl: string | null;
}

export interface IFindOne {
  id?: string;
  email?: string;
}

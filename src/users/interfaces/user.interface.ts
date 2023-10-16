import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export class IUser extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly role?: Role;
  readonly dob: Date;
  readonly gender: string;
  readonly isSubscribeToNewsLetter: boolean;
  readonly isVerified?: boolean;
  readonly interest: string[];
  readonly imageUrl: string | null;
}

export interface IFindOne {
  id?: string;
  email?: string;
}

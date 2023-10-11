import { Role } from 'src/roles/role.enum';

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  dob: Date;
  gender: string;
  isSubscribeToNewsLetter: boolean;
  interest: string[];
  imageUrl: string | null;
}

export type IUserWithoutPassword = Omit<IUser, 'password'>;

export interface IFindOne {
  id?: string;
  email?: string;
}

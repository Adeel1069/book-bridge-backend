export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  dob: string;
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

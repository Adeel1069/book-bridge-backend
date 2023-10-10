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

export interface IFindOne {
  id?: string;
  email?: string;
}

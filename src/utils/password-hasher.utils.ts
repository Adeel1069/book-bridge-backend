import * as bcrypt from 'bcrypt';

export class PasswordHasher {
  static hashPassword(password: string, salt: string | number): string {
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static comparePasswords(passowrd: string, hash: string): boolean {
    const isMatched = bcrypt.compareSync(passowrd, hash);
    return isMatched;
  }
}

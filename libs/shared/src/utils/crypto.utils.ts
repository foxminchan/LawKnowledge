import { Observable, from } from 'rxjs';
import { argon2id, hash, verify } from 'argon2';
import type { Options as ArgonOptions } from 'argon2';

const argon2Options: ArgonOptions & { raw?: false } = {
  type: argon2id,
  hashLength: 50,
  saltLength: 32,
  timeCost: 4,
};

export const CryptoUtils = {
  async hashString(userPassword: string) {
    return await hash(userPassword, argon2Options);
  },

  verifyHash(
    userPassword: string,
    passwordToCompare: string
  ): Observable<boolean> {
    return from(verify(userPassword, passwordToCompare, argon2Options));
  },
};

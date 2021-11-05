import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private privateKey: string;

  constructor() {
    this.privateKey = environment.PRIVATE_KEY;
  }

  addToken(token: string): void {
    const encyptedToken = this.encrypt(token);
    sessionStorage.setItem('credentials', encyptedToken);
  }

  addRole(role: string): void {
    const encyptedToken = this.encrypt(role);
    sessionStorage.setItem('role', encyptedToken);
  }

  getToken(): string | null {
    const token: string | null = sessionStorage.getItem('credentials');
    if (token) {
      return this.decrypt(token);
    }
    return null;
  }

  getRole(): string | null {
    const role: string | null = sessionStorage.getItem('role');
    if (role) {
      return this.decrypt(role);
    }
    return null;
  }

  encrypt(token: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.privateKey);
    const iv = CryptoJS.enc.Utf8.parse(this.privateKey);
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(token.toString()),
      key,
      {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  }

  decrypt(token: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.privateKey);
    const iv = CryptoJS.enc.Utf8.parse(this.privateKey);
    const decrypted = CryptoJS.AES.decrypt(token, key, {
      keySize: 128 / 8,
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

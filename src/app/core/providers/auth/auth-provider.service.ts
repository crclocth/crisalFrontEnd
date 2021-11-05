import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { TokenService } from '../../services/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthProviderService {
  private authenticatedAdmin: boolean;
  private currentUser: any;

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.authenticatedAdmin = false;
    this.currentUser = null;

    if (this.tokenService.getRole() === 'user') {
      this.authenticatedAdmin = true;
    }
  }

  isAuthenticated(ruta: string): boolean {
    if (ruta.trim() === 'user') {
      //Admin
      return this.authenticatedAdmin;
    }
    return false;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(email: string, password: string): Observable<any> {
    return this.httpService
      .postLogin('/auth/login/user', {
        email: email,
        password: password,
      })
      .pipe(
        tap((data: any) => {
          console.log(data);

          if (data.user.role === 'user') {
            const token: string = data.access_token;
            this.currentUser = {
              role: data.user.role,
              mail: data.user.mail,
            };
            this.tokenService.addRole(this.currentUser.role);
            this.tokenService.addToken(token);
            this.authenticatedAdmin = true;
            this.router.navigate(['admin/certificados']);
          } else {
            throw this.router.navigate(['visitor/inicio']);
          }
        })
      );
  }

  public logout(): void {
    this.currentUser = null;
    this.authenticatedAdmin = false;
    sessionStorage.removeItem('credentials');
    sessionStorage.removeItem('role');
    this.router.navigate(['visitor/inicio']);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserProviderService {
  constructor(private httpService: HttpService) {}

  public postUser(user: User): Observable<User> {
    return this.httpService.post('/user', user);
  }

  public getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>('/user');
  }

  public getUserById(id: string): Observable<User> {
    return this.httpService.get<User>('/user/' + id);
  }

  public async deleteUserById(id: string): Promise<any> {
    await this.httpService.delete('/user/' + id).toPromise();
  }

  public async patchUser(id: string, newNews: User): Promise<any> {
    await this.httpService.patch<User>('/user/' + id, newNews).toPromise();
  }
}

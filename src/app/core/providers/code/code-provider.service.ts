import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../../models/code.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CodeProviderService {
  constructor(private httpService: HttpService) {}

  public postCode(client: Code): Observable<Code> {
    return this.httpService.post('/code', client);
  }

  public getCodes(): Observable<Code[]> {
    return this.httpService.get<Code[]>('/code');
  }

  public getCodeById(id: string): Observable<Code> {
    return this.httpService.get<Code>('/code/' + id);
  }

  public async deleteCodeById(id: string): Promise<any> {
    await this.httpService.delete('/code/' + id).toPromise();
  }

  public async patchCode(id: string, newClient: Code): Promise<any> {
    await this.httpService.patch<Code>('/code/' + id, newClient).toPromise();
  }
}

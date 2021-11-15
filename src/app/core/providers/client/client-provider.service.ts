import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ClientProviderService {
  constructor(private httpService: HttpService) {}

  public postClient(client: Client): Observable<Client> {
    return this.httpService.post('/client', client);
  }

  public getClients(): Observable<Client[]> {
    return this.httpService.get<Client[]>('/client');
  }

  public getClientById(id: string): Observable<Client> {
    return this.httpService.get<Client>('/client/' + id);
  }

  public async deleteClientById(id: string): Promise<any> {
    await this.httpService.delete('/client/' + id).toPromise();
  }

  public async patchClient(id: string, newClient: Client): Promise<any> {
    await this.httpService
      .patch<Client>('/client/' + id, newClient)
      .toPromise();
  }
}

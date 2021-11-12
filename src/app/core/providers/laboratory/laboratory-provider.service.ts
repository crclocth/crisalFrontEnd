import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratory } from '../../models/laboratory.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LaboratoryProviderService {
  constructor(private httpService: HttpService) {}

  public postLaboratory(information: any): Observable<Laboratory> {
    return this.httpService.post('/laboratory', information);
  }

  public getLaboratorys(): Observable<Laboratory[]> {
    return this.httpService.get<Laboratory[]>('/laboratory');
  }

  public getLaboratoryById(id: string): Observable<Laboratory> {
    return this.httpService.get<Laboratory>('/laboratory/' + id);
  }

  public async deleteLaboratoryById(id: string): Promise<any> {
    await this.httpService.delete('/laboratory/' + id).toPromise();
  }

  public async patchLaboratory(
    id: string,
    newInformation: Laboratory
  ): Promise<any> {
    await this.httpService
      .patch<Laboratory>('/laboratory/' + id, newInformation)
      .toPromise();
  }
}

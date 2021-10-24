import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from '../../models/information.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class InformationProviderService {
  constructor(private httpService: HttpService) {}

  public postInformation(information: any): Observable<Information> {
    return this.httpService.post('/information', information);
  }

  public getInformations(): Observable<Information[]> {
    return this.httpService.get<Information[]>('/information');
  }

  public getInformationById(id: string): Observable<Information> {
    return this.httpService.get<Information>('/information/' + id);
  }

  public async deleteInformationById(id: string): Promise<any> {
    await this.httpService.delete('/information/' + id).toPromise();
  }

  public async patchInformation(
    id: string,
    newInformation: Information
  ): Promise<any> {
    await this.httpService
      .patch<Information>('/Information/' + id, newInformation)
      .toPromise();
  }
}

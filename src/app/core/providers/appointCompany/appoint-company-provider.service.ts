import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointCompany } from '../../models/appointCompany.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AppointCompanyProviderService {
  constructor(private httpService: HttpService) {}

  public postAppointCompany(
    certification: AppointCompany
  ): Observable<AppointCompany> {
    return this.httpService.post('/appoint-company', certification);
  }

  public getAppointCompanys(): Observable<AppointCompany[]> {
    return this.httpService.get<AppointCompany[]>('/appoint-company');
  }

  public getAppointCompanyById(id: string): Observable<AppointCompany> {
    return this.httpService.get<AppointCompany>('/appoint-company/' + id);
  }

  public async deleteAppointCompanyById(id: string): Promise<any> {
    await this.httpService.delete('/appoint-company/' + id).toPromise();
  }

  public async patchAppointCompany(
    id: string,
    newCertification: AppointCompany
  ): Promise<any> {
    await this.httpService
      .patch<AppointCompany>('/appoint-company/' + id, newCertification)
      .toPromise();
  }
}

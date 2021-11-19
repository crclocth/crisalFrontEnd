import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../../models/certification.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CertificationProviderService {
  constructor(private httpService: HttpService) {}

  public postCertification(
    certification: Certification
  ): Observable<Certification> {
    return this.httpService.post('/certification', certification);
  }

  public getCertifications(): Observable<Certification[]> {
    return this.httpService.get<Certification[]>('/certification');
  }

  public getCertificationById(id: string): Observable<Certification> {
    return this.httpService.get<Certification>('/certification/' + id);
  }

  public async deleteCertificationById(id: string): Promise<any> {
    await this.httpService.delete('/certification/' + id).toPromise();
  }

  public async patchCertification(
    id: string,
    newCertification: Certification
  ): Promise<any> {
    await this.httpService
      .patch<Certification>('/certification/' + id, newCertification)
      .toPromise();
  }
}

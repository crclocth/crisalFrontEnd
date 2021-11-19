import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/certificate.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CertificateProviderService {
  constructor(private httpService: HttpService) {}

  public postCertificate(certification: Certificate): Observable<Certificate> {
    return this.httpService.post('/certificate', certification);
  }

  public getCertificates(): Observable<Certificate[]> {
    return this.httpService.get<Certificate[]>('/certificate');
  }

  public getCertificateById(id: string): Observable<Certificate> {
    return this.httpService.get<Certificate>('/certificate/' + id);
  }

  public async deleteCertificateById(id: string): Promise<any> {
    await this.httpService.delete('/certificate/' + id).toPromise();
  }

  public async patchCertificate(
    id: string,
    newCertification: Certificate
  ): Promise<any> {
    await this.httpService
      .patch<Certificate>('/certificate/' + id, newCertification)
      .toPromise();
  }
}

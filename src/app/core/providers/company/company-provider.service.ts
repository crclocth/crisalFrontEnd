import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.modal';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyProviderService {
  constructor(private httpService: HttpService) {}

  public postCompany(company: Company): Observable<Company> {
    return this.httpService.post('/company', company);
  }

  public getCompanies(): Observable<Company[]> {
    return this.httpService.get<Company[]>('/company');
  }

  public getCompanyById(id: string): Observable<Company> {
    return this.httpService.get<Company>('/company/' + id);
  }

  public async deleteCompanyById(id: string): Promise<any> {
    await this.httpService.delete('/company/' + id).toPromise();
  }

  public async patchCompany(id: string, newCompany: Company): Promise<any> {
    await this.httpService
      .patch<Company>('/company/' + id, newCompany)
      .toPromise();
  }
}

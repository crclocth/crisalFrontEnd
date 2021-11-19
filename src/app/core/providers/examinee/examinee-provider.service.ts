import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examinee } from '../../models/examinee.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ExamineeProviderService {
  constructor(private httpService: HttpService) {}

  public postExaminee(exam: Examinee): Observable<Examinee> {
    return this.httpService.post('/examinee', exam);
  }

  public getExaminees(): Observable<Examinee[]> {
    return this.httpService.get<Examinee[]>('/examinee');
  }

  public getExamineeById(id: string): Observable<Examinee> {
    return this.httpService.get<Examinee>('/examinee/' + id);
  }

  public async deleteExamineeById(id: string): Promise<any> {
    await this.httpService.delete('/examinee/' + id).toPromise();
  }

  public async patchExaminee(id: string, newExam: Examinee): Promise<any> {
    await this.httpService.patch<Examinee>('/exam/' + id, newExam).toPromise();
  }
}

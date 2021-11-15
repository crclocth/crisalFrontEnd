import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../../models/exam.modal';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ExamProviderService {
  constructor(private httpService: HttpService) {}

  public postExam(exam: Exam): Observable<Exam> {
    return this.httpService.post('/exam', exam);
  }

  public getExams(type: string): Observable<Exam[]> {
    return this.httpService.get<Exam[]>('/exam/tipo/' + type);
  }

  public getExamById(id: string): Observable<Exam> {
    return this.httpService.get<Exam>('/exam/' + id);
  }

  public async deleteExamById(id: string): Promise<any> {
    await this.httpService.delete('/exam/' + id).toPromise();
  }

  public async patchExam(id: string, newExam: Exam): Promise<any> {
    await this.httpService.patch<Exam>('/exam/' + id, newExam).toPromise();
  }
}

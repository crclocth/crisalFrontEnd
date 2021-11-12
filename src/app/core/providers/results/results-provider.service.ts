import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from '../../models/results.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsProviderService {
  constructor(private httpService: HttpService) {}

  public postResults(results: any): Observable<Results> {
    return this.httpService.post('/physiological', results);
  }

  public getResultss(): Observable<Results[]> {
    return this.httpService.get<Results[]>('/results');
  }

  public getResultsById(id: string): Observable<Results> {
    return this.httpService.get<Results>('/results/' + id);
  }

  public async deleteResultsById(id: string): Promise<any> {
    await this.httpService.delete('/results/' + id).toPromise();
  }

  public async patchResults(id: string, newNews: Results): Promise<any> {
    await this.httpService
      .patch<Results>('/results/' + id, newNews)
      .toPromise();
  }
}

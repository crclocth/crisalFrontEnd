import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Physiological } from '../../models/physiological.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class PhusiologicalProviderService {
  constructor(private httpService: HttpService) {}

  public postPhysiological(physiological: any): Observable<Physiological> {
    return this.httpService.post('/physiological', physiological);
  }

  public getPhysiologicals(): Observable<Physiological[]> {
    return this.httpService.get<Physiological[]>('/physiological');
  }

  public getPhysiologicalById(id: string): Observable<Physiological> {
    return this.httpService.get<Physiological>('/physiological/' + id);
  }

  public async deletePhysiologicalById(id: string): Promise<any> {
    await this.httpService.delete('/physiological/' + id).toPromise();
  }

  public async patchPhysiological(
    id: string,
    newNews: Physiological
  ): Promise<any> {
    await this.httpService
      .patch<Physiological>('/physiological/' + id, newNews)
      .toPromise();
  }
}

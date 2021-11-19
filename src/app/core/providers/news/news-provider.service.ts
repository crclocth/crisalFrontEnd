import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../models/news.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class NewsProviderService {
  constructor(private httpService: HttpService) {}

  public postNew(news: News): Observable<News> {
    return this.httpService.post('/new', news);
  }

  public getNews(): Observable<News[]> {
    return this.httpService.get<News[]>('/new');
  }

  public getNewById(id: string): Observable<News> {
    return this.httpService.get<News>('/new/' + id);
  }

  public async deleteNewById(id: string): Promise<any> {
    await this.httpService.delete('/new/' + id).toPromise();
  }

  public async patchNew(id: string, newNews: News): Promise<any> {
    await this.httpService.patch<News>('/new/' + id, newNews).toPromise();
  }
}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-news-screen',
  templateUrl: './news-screen.component.html',
  styleUrls: ['./news-screen.component.less'],
})
export class NewsScreenComponent implements OnInit {
  public news$: Observable<News[]>;
  public newsArray: News[];

  constructor(private newProviderService: NewsProviderService) {
    this.news$ = new Observable<News[]>();
    this.newsArray = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchNews();
    console.log('se cambio');
  }

  async ngOnInit() {
    this.fetchNews();
  }

  async fetchNews() {
    try {
      this.newsArray = await this.newProviderService.getNews().toPromise();
      this.newsArray = this.newsArray.reverse();
    } catch (error) {
      console.log('error');
    }
  }
}

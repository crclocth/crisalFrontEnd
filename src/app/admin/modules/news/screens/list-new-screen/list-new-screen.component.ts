import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-list-new-screen',
  templateUrl: './list-new-screen.component.html',
  styleUrls: ['./list-new-screen.component.less'],
})
export class ListNewScreenComponent implements OnInit {
  public news$: Observable<News[]>;
  public newsArray: News[];
  constructor(private newProviderService: NewsProviderService) {
    this.news$ = new Observable<News[]>();
    this.newsArray = [];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  ngOnInit() {
    this.fetchNews();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchNews();
    console.log('se cambio');
  }

  async fetchNews() {
    try {
      this.news$ = await this.newProviderService.getNews();
      this.news$.subscribe((news: News[]) => {
        this.newsArray = news;
      });
    } catch (error) {
      console.log('error');
    }
  }

  async selectNew(newItem: News) {
    console.log(newItem._id);
    try {
      await this.newProviderService.deleteNewById(newItem._id);
    } catch (error) {
      console.log('no');
    }
  }
}

import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-list-new-screen',
  templateUrl: './list-new-screen.component.html',
  styleUrls: ['./list-new-screen.component.less'],
})
export class ListNewScreenComponent implements OnInit {
  public newsArray: News[];
  constructor(private newProviderService: NewsProviderService) {
    this.newsArray = [];
  }

  ngOnInit() {
    this.fetchNews();
  }

  addItem(event: any) {
    this.fetchNews();
  }

  async fetchNews() {
    try {
      this.newsArray = await this.newProviderService.getNews().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models/news.model';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
})
export class CarouselComponent implements OnInit {
  public news$: Observable<News[]>;
  public newsArray: News[];

  constructor(private newsProviderService: NewsProviderService) {
    this.news$ = new Observable<News[]>();
    this.newsArray = [];
  }

  ngOnInit() {
    this.fetchNews();
  }

  private async fetchNews() {
    try {
      this.news$ = await this.newsProviderService.getNews();
      this.news$.subscribe((client: News[]) => {
        this.newsArray = client;
      });
      /* this.certificationArray = await this.certificationProviderService
        .getCertifications()
        .toPromise(); */
    } catch (error) {
      console.log('error');
    }
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slidePrev() {
    const slide = this.swiper?.swiperRef.clickedSlide;
    console.log(slide);
  }
}

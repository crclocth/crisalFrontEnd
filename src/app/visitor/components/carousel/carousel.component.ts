import { Component, OnInit, ViewChild } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
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
  public arrayCarrousel: News[];

  constructor(private newsProviderService: NewsProviderService) {
    this.news$ = new Observable<News[]>();
    this.newsArray = [];
    this.arrayCarrousel = [];
  }

  async ngOnInit() {
    await this.fetchNews();
    await this.pushNews();
  }

  async fetchNews() {
    try {
      this.news$ = await this.newsProviderService.getNews();
      this.news$.subscribe((client: News[]) => {
        this.newsArray = client;
        this.pushNews();
      });
    } catch (error) {
      console.log('Error al obtener Noticias');
    }
  }

  async pushNews() {
    let i = 0;
    let j = this.newsArray.reverse();
    for (let news of j) {
      if (news.visible) {
        this.arrayCarrousel.push(news);
        i++;
      }
      if (i > 5) {
        break;
      }
    }
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slidePrev() {
    const slide = this.swiper?.swiperRef.clickedSlide;
    console.log(slide);
  }
}

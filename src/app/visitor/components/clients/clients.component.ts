import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less'],
})
export class ClientsComponent implements OnInit {
  public breakPoints: any = {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}

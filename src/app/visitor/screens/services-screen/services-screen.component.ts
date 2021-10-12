import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.less'],
})
export class ServicesScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dummy = [
    {
      _id: '1',
      name: 'Nombre de la batería',
    },
    {
      _id: '2',
      name: 'Nombre de la batería',
    },
    {
      _id: '3',
      name: 'Nombre de la batería',
    },
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

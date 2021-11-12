import { Component, HostListener, OnInit } from '@angular/core';
import { Battery } from 'src/app/core/models/battery.model';

@Component({
  selector: 'app-list-battery-screen',
  templateUrl: './list-battery-screen.component.html',
  styleUrls: ['./list-battery-screen.component.less'],
})
export class ListBatteryScreenComponent implements OnInit {
  public batteryArray: Battery[];
  constructor() {
    this.batteryArray = [];
  }

  ngOnInit() {
    /* this.fetchExams(); */
  }

  addItem(event: any) {
    /* this.fetchExams(); */
  }

  /* async fetchExams() {
    try {
      this.examArray = await this.examProviderService.getExams().toPromise();
    } catch (error) {
      console.log('error');
    }
  } */

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

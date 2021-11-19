import { Component, OnInit, HostListener } from '@angular/core';
import { Battery } from 'src/app/core/models/battery.model';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.less'],
})
export class ServicesScreenComponent implements OnInit {
  public batteryAray: Battery[];
  constructor(private batteryProviderService: BatteryProviderService) {
    this.batteryAray = [];
  }

  async ngOnInit() {
    this.fetchNews();
  }

  async fetchNews() {
    try {
      this.batteryAray = await this.batteryProviderService
        .getBatteries()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

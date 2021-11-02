import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Information } from 'src/app/core/models/information.model';
import { InformationProviderService } from 'src/app/core/providers/information/information-provider.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less'],
})
export class HomeScreenComponent implements OnInit {
  public informationArray: Information[];

  constructor(private informationProviderService: InformationProviderService) {
    this.informationArray = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchInformations();
    console.log('se cambio');
  }

  async ngOnInit() {
    this.fetchInformations();
  }

  async fetchInformations() {
    try {
      this.informationArray = await this.informationProviderService
        .getInformations()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }
}

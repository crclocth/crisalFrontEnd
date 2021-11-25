import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/core/models/information.model';
import { InformationProviderService } from 'src/app/core/providers/information/information-provider.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements OnInit {
  public informationArray!: Information[];

  constructor(private informationProviderService: InformationProviderService) {}

  async ngOnInit() {
    await this.fetchInformations();
    console.log(this.open());
    const iframe = document.getElementById(
      'frameLocation'
    ) as HTMLIFrameElement;

    iframe.contentWindow!.location.replace(this.open());
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

  open() {
    return this.informationArray[0].location;
  }
}

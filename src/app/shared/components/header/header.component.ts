import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from 'src/app/core/models/information.model';
import { InformationProviderService } from 'src/app/core/providers/information/information-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  public informations$: Observable<Information[]>;
  public informationArray: Information[];

  constructor(private informationProviderService: InformationProviderService) {
    this.informations$ = new Observable<Information[]>();
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
      this.informations$ =
        await this.informationProviderService.getInformations();
      this.informations$.subscribe((information: Information[]) => {
        this.informationArray = information;
      });
    } catch (error) {
      console.log('error');
    }
  }
}

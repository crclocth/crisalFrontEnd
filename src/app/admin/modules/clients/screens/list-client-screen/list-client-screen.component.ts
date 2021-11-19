import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';

@Component({
  selector: 'app-list-client-screen',
  templateUrl: './list-client-screen.component.html',
  styleUrls: ['./list-client-screen.component.less'],
})
export class ListClientScreenComponent implements OnInit {
  public clientArray: Client[];
  constructor(private clientProviderService: ClientProviderService) {
    this.clientArray = [];
  }
  ngOnInit() {
    this.fetchClients();
  }

  addItem(event: any) {
    this.fetchClients();
  }

  async fetchClients() {
    try {
      this.clientArray = await this.clientProviderService
        .getClients()
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

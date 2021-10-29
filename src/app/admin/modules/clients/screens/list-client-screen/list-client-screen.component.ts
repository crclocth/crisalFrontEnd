import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client.model';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';

@Component({
  selector: 'app-list-client-screen',
  templateUrl: './list-client-screen.component.html',
  styleUrls: ['./list-client-screen.component.less'],
})
export class ListClientScreenComponent implements OnInit {
  public clients$: Observable<Client[]>;
  public clientArray: Client[];
  constructor(private clientProviderService: ClientProviderService) {
    this.clients$ = new Observable<Client[]>();
    this.clientArray = [];
  }
  ngOnInit() {
    this.fetchClients();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchClients();
    console.log('se cambio');
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  async fetchClients() {
    try {
      this.clients$ = await this.clientProviderService.getClients();
      this.clients$.subscribe((client: Client[]) => {
        this.clientArray = client;
      });
    } catch (error) {
      console.log('error');
    }
  }
}

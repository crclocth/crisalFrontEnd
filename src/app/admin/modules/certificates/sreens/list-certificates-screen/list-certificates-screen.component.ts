import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-certificates-screen',
  templateUrl: './list-certificates-screen.component.html',
  styleUrls: ['./list-certificates-screen.component.less'],
})
export class ListCertificatesScreenComponent implements OnInit {
  /* public certificatesArray: Client[]; */
  constructor(/* private clientProviderService: ClientProviderService */) {
    /* this.certificatesArray = []; */
  }
  ngOnInit() {
    this.fetchClients();
  }

  addItem(event: any) {
    this.fetchClients();
  }

  async fetchClients() {
    /* try {
      this.clientArray = await this.clientProviderService
        .getClients()
        .toPromise();
    } catch (error) {
      console.log('error');
    } */
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

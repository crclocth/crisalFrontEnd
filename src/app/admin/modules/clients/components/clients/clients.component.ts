import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less'],
})
export class ClientsComponent implements OnInit {
  @Input() client!: Client;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

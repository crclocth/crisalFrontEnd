import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.less'],
})
export class CardClientComponent implements OnInit {
  @Input() client!: Client;
  constructor() {}

  ngOnInit(): void {
    console.log(this.client);
  }
}

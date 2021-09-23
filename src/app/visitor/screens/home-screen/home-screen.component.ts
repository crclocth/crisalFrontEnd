import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less'],
})
export class HomeScreenComponent implements OnInit {
  public telephone: string;
  public address: string;
  public mail: string;

  constructor() {
    this.telephone = '+5632 346 5021  +569 9081 9320';
    this.address = 'Arlegui 263, Piso 7, Oficina 701 - Ed. Gala - Viña del Mar';
    this.mail = 'contacto@crisalsaludlaboral.cl';
  }

  ngOnInit(): void {}
}

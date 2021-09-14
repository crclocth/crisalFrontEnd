import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  public telephone: string;
  public direction: string;
  public mail: string;

  constructor() {
    this.telephone = '+5632 346 5021  +569 9081 9320';
    this.direction =
      'Arlegui 263, Piso 7, Oficina 701 - Ed. Gala - Viña del Mar';
    this.mail = 'contacto@crisalsaludlaboral.cl';
  }

  ngOnInit(): void {}
}

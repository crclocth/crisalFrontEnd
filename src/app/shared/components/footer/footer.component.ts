import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
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

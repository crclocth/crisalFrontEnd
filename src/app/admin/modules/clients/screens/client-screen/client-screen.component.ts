import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-screen',
  templateUrl: './client-screen.component.html',
  styleUrls: ['./client-screen.component.less'],
})
export class ClientScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/clientes/agreagar-cliente') {
      return 'agreagar-cliente';
    }
    if (route === '/admin/clientes/historico') {
      return 'historico';
    }
  }
}

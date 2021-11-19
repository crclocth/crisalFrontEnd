import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.less'],
})
export class UserScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/usuarios/crear-usuario') {
      return 'crear-usuario';
    }
    if (route === '/admin/usuarios/historico') {
      return 'historico';
    }
  }
}

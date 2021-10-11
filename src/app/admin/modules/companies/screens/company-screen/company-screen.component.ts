import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-screen',
  templateUrl: './company-screen.component.html',
  styleUrls: ['./company-screen.component.less'],
})
export class CompanyScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/empresas/agregar-empresa') {
      return 'agregar-empresa';
    }
    if (route === '/admin/empresas/historico') {
      return 'historico';
    }
  }
}

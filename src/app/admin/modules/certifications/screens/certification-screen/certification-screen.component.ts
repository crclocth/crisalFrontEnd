import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certification-screen',
  templateUrl: './certification-screen.component.html',
  styleUrls: ['./certification-screen.component.less'],
})
export class CertificationScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/certificaciones/agregar-certificacion') {
      return 'agregar-certificacion';
    }
    if (route === '/admin/certificaciones/historico') {
      return 'historico';
    }
  }
}

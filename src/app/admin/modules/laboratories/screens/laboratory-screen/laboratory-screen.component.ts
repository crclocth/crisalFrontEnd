import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-screen',
  templateUrl: './laboratory-screen.component.html',
  styleUrls: ['./laboratory-screen.component.less'],
})
export class LaboratoryScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/laboratorios/crear-laboratorio') {
      return 'crear-laboratorio';
    }
    if (route === '/admin/laboratorios/historico') {
      return 'historico';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-screen',
  templateUrl: './employee-screen.component.html',
  styleUrls: ['./employee-screen.component.less'],
})
export class EmployeeScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/empleados/agregar-empleado') {
      return 'agregar-empleado';
    }
    if (route === '/admin/empleados/historico') {
      return 'historico';
    }
  }
}

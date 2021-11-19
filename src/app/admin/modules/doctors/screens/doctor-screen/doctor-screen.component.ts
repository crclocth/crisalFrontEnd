import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-screen',
  templateUrl: './doctor-screen.component.html',
  styleUrls: ['./doctor-screen.component.less'],
})
export class DoctorScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/doctores/crear-doctor') {
      return 'crear-doctor';
    }
    if (route === '/admin/doctores/historico') {
      return 'historico';
    }
  }
}

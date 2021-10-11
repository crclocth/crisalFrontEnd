import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battery-screen',
  templateUrl: './battery-screen.component.html',
  styleUrls: ['./battery-screen.component.less'],
})
export class BatteryScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/batarias/crear-bateria') {
      return 'crear-bateria';
    }
    if (route === '/admin/baterias/historico') {
      return 'historico';
    }
  }
}

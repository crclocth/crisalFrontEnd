import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-screen',
  templateUrl: './information-screen.component.html',
  styleUrls: ['./information-screen.component.less'],
})
export class InformationScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    let route = this.router.url;
    if (route === '/admin/informacion/editar-informacion') {
      return 'editar-informacion';
    }
  }
}

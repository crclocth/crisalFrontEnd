import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.component.html',
  styleUrls: ['./new-screen.component.less'],
})
export class NewScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/noticias/crear-noticia') {
      return 'crear-noticia';
    }
    if (route === '/admin/noticias/historico') {
      return 'historico';
    }
  }
}

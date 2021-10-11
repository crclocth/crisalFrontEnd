import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.less'],
})
export class ExamScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/examenes/crear-examen') {
      return 'crear-examen';
    }
    if (route === '/admin/examenes/historico') {
      return 'historico';
    }
  }
}

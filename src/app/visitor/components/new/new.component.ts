import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  public values: string;
  public day: string;
  public month: string;
  public title: string;

  constructor(public router: Router) {
    this.values =
      'El mes de octubre CRISAL Salud Laboral está de aniversario, cumpliendo 5 años de atención de primera calidad en salud laboral. Queremos agradecer a todos los trabajadores y empresas que han confiado en nosotros y que gracias a su preferencia, hemos podido brindar más de 5 mil atenciones profesionales. Por ello, queremos celebrar este mes...';
    this.day = '01';
    this.month = 'OCT';
    this.title = 'OCTUBRE: MES DE ANIVERSARIO';
  }

  goToNewsDetailScreens() {
    this.router.navigate(['/visitor/noticias/detalle']);
  }

  ngOnInit(): void {}
}

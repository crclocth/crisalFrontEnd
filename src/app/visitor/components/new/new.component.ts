import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  public values: string;

  constructor() {
    this.values =
      'Ser oportunos en la entrega de resultados de exámenes de los trabajadores a las empresas. Excelencia en el desempeño de sus profesionales y responsabilidad. Confiabilidad en la información oportuna';
  }

  ngOnInit(): void {}
}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-screen',
  templateUrl: './about-us-screen.component.html',
  styleUrls: ['./about-us-screen.component.less'],
})
export class AboutUsScreenComponent implements OnInit {
  public aboutUs: string;
  public vision: string;
  public mission: string;
  public values: string;

  constructor() {
    this.aboutUs =
      'Nuestra empresa se basa en criterios de calidad en los servicios profesionales que ofrece a la industria y empresas de servicios, con la clara convicción de cumplir a cabalidad con los estándares de eficiencia que requiere y regula el mercado. Nuestra empresa se enmarca dentro de las políticas de calidad y seguridad en la información de los distintos servicios realizados, con el respaldo de certificaciones y registros para tales fines.';
    this.vision =
      'Ser una empresa líder en los servicio de salud ocupacional y ergonomía en la zona central del país con una visión clara de compromiso y calidad profesional';
    this.mission =
      'Ofrecer una atención personalizada, oportuna y efectiva de las necesidades de cada trabajador y empresas. Otorgar servicios de calidad y calidez a través de nuestros equipos de profesionales.';
    this.values =
      'Ser oportunos en la entrega de resultados de exámenes de los trabajadores a las empresas. Excelencia en el desempeño de sus profesionales y responsabilidad. Confiabilidad en la información oportuna';
  }

  ngOnInit(): void {}

  dummy = [
    {
      _id: '1',
      name: 'Nombre',
      profession: 'Profesión',
      description: 'Descripción',
    },
    {
      _id: '2',
      name: 'Nombre',
      profession: 'Profesión',
      description: 'Descripción',
    },
    {
      _id: '3',
      name: 'Nombre',
      profession: 'Profesión',
      description: 'Descripción',
    },
    {
      _id: '4',
      name: 'Nombre',
      profession: 'Profesión',
      description: 'Descripción',
    },
    {
      _id: '5',
      name: 'Nombre',
      profession: 'Profesión',
      description: 'Descripción',
    },
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

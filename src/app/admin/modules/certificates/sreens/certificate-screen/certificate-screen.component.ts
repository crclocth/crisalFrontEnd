import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-screen',
  templateUrl: './certificate-screen.component.html',
  styleUrls: ['./certificate-screen.component.less'],
})
export class CertificateScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/certificados/crear-certificado') {
      return 'crear-certificado';
    }
    if (route === '/admin/certificados/historico') {
      return 'historico';
    }
  }
}

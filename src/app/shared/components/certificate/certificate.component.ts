import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.less'],
})
export class CertificateComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  public goToValidateCertificatesScreens(): void {
    this.router.navigate(['/visitor/validar-certificado']);
  }
  public goToDownloadCertificatesScreens(): void {
    this.router.navigate(['/visitor/descargar-certificado']);
  }
}

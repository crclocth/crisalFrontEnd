import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateScreenComponent } from './sreens/certificate-screen/certificate-screen.component';

@NgModule({
  declarations: [CertificateScreenComponent],
  imports: [CommonModule, CertificatesRoutingModule],
})
export class CertificatesModule {}

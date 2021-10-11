import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationScreenComponent } from './screens/certification-screen/certification-screen.component';


@NgModule({
  declarations: [
    CertificationScreenComponent
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }

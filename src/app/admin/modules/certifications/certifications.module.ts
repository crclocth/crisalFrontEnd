import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationScreenComponent } from './screens/certification-screen/certification-screen.component';
import { AddCertificationScreenComponent } from './screens/add-certification-screen/add-certification-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCertificationScreenComponent } from './screens/list-certification-screen/list-certification-screen.component';
import { CertificationsComponent } from './components/certifications/certifications.component';


@NgModule({
  declarations: [
    CertificationScreenComponent,
    AddCertificationScreenComponent,
    ListCertificationScreenComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class CertificationsModule { }

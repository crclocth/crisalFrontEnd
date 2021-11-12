import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateScreenComponent } from './sreens/certificate-screen/certificate-screen.component';
import { CreateCertificateScreenComponent } from './sreens/create-certificate-screen/create-certificate-screen.component';
import { ListCertificatesScreenComponent } from './sreens/list-certificates-screen/list-certificates-screen.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BateriaBasicaComponent } from './components/general-exams/bateria-basica/bateria-basica.component';
import { GranAlturaGeograficaComponent } from './components/general-exams/gran-altura-geografica/gran-altura-geografica.component';

const components = [
  CertificateScreenComponent,
  CreateCertificateScreenComponent,
  ListCertificatesScreenComponent,
  CertificatesComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
  BateriaBasicaComponent,
  GranAlturaGeograficaComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CertificatesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateScreenComponent } from './sreens/certificate-screen/certificate-screen.component';
import { CreateCertificateScreenComponent } from './sreens/create-certificate-screen/create-certificate-screen.component';
import { ListCertificatesScreenComponent } from './sreens/list-certificates-screen/list-certificates-screen.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralExamsComponent } from './components/general-exams/general-exams.component';
import { LaboratoryExamsComponent } from './components/laboratory-exams/laboratory-exams.component';
/* import { MAT_DATE_LOCALE } from '@angular/material/core'; */
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { QRCodeModule } from 'angular2-qrcode';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
PdfMakeWrapper.setFonts(pdfFonts);

const components = [
  CertificateScreenComponent,
  CreateCertificateScreenComponent,
  ListCertificatesScreenComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
  GeneralExamsComponent,
];

@NgModule({
  /*  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es' }], */
  declarations: [...components, LaboratoryExamsComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    MaterialModule,
    SharedModule,
    QRCodeModule,
    MatTableModule,
    MatSortModule
  ],
})
export class CertificatesModule {}

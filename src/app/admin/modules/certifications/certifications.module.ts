import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationScreenComponent } from './screens/certification-screen/certification-screen.component';
import { AddCertificationScreenComponent } from './screens/add-certification-screen/add-certification-screen.component';
import { ListCertificationScreenComponent } from './screens/list-certification-screen/list-certification-screen.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  CertificationScreenComponent,
  AddCertificationScreenComponent,
  ListCertificationScreenComponent,
  CertificationsComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CertificationsModule {}

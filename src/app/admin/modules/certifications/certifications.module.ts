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
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CertificationsModule {}

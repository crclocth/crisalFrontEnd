import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorScreenComponent } from './screens/doctor-screen/doctor-screen.component';
import { ListDoctorScreenComponent } from './screens/list-doctor-screen/list-doctor-screen.component';
import { AddDoctorScreenComponent } from './screens/add-doctor-screen/add-doctor-screen.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

const components = [
  DoctorScreenComponent,
  ListDoctorScreenComponent,
  AddDoctorScreenComponent,
  DoctorComponent,
  DeleteModalComponent,
  SeeModalComponent,
  EditModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, DoctorsRoutingModule, MaterialModule, SharedModule],
})
export class DoctorsModule {}

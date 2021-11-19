import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentScreenComponent } from './screens/appointment-screen/appointment-screen.component';
import { ConfirmAppointmentComponent } from './screens/confirm-appointment/confirm-appointment.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { AppointmentCompanyComponent } from './components/appointment-company/appointment-company.component';
import { AppointmentPrivateComponent } from './components/appointment-private/appointment-private.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteModelPrivateComponent } from './components/delete-model-private/delete-model-private.component';
import { SeeModelPrivateComponent } from './components/see-model-private/see-model-private.component';

const components = [AppointmentScreenComponent, ConfirmAppointmentComponent];

@NgModule({
  declarations: [
    ...components,
    DeleteModalComponent,
    SeeModalComponent,
    AppointmentCompanyComponent,
    AppointmentPrivateComponent,
    DeleteModelPrivateComponent,
    SeeModelPrivateComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class AppointmentsModule {}

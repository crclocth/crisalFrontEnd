import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentScreenComponent } from './screens/appointment-screen/appointment-screen.component';

@NgModule({
  declarations: [AppointmentScreenComponent],
  imports: [CommonModule, AppointmentsRoutingModule],
})
export class AppointmentsModule {}

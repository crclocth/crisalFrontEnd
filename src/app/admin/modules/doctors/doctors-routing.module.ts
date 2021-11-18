import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorScreenComponent } from './screens/doctor-screen/doctor-screen.component';

const routes: Routes = [
  { path: '', component: DoctorScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: DoctorScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}

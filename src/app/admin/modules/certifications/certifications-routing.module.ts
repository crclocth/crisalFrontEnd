import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationScreenComponent } from './screens/certification-screen/certification-screen.component';

const routes: Routes = [
  { path: '', component: CertificationScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: CertificationScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificationsRoutingModule {}

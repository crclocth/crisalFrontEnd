import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoryScreenComponent } from './screens/laboratory-screen/laboratory-screen.component';

const routes: Routes = [
  { path: '', component: LaboratoryScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: LaboratoryScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoriesRoutingModule {}

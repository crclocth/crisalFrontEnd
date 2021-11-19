import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';

const routes: Routes = [
  { path: '', component: InformationScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: InformationScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationRoutingModule {}

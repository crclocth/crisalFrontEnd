import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateScreenComponent } from './sreens/certificate-screen/certificate-screen.component';

const routes: Routes = [
  { path: '', component: CertificateScreenComponent, pathMatch: 'full' },
  { path: 'crear-certificado', component: CertificateScreenComponent },
  { path: '**', component: CertificateScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatesRoutingModule {}

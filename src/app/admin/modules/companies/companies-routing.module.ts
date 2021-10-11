import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyScreenComponent } from './screens/company-screen/company-screen.component';

const routes: Routes = [
  { path: '', component: CompanyScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: CompanyScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientScreenComponent } from './screens/client-screen/client-screen.component';

const routes: Routes = [
  { path: '', component: ClientScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: ClientScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}

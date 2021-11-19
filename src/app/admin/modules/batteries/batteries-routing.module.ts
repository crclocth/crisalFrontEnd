import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryScreenComponent } from './screens/battery-screen/battery-screen.component';

const routes: Routes = [
  { path: '', component: BatteryScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: BatteryScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatteriesRoutingModule {}

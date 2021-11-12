import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteriesRoutingModule } from './batteries-routing.module';
import { BatteryScreenComponent } from './screens/battery-screen/battery-screen.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateBatteryScreenComponent } from './screens/create-battery-screen/create-battery-screen.component';
import { ListBatteryScreenComponent } from './screens/list-battery-screen/list-battery-screen.component';
import { BatteryComponent } from './components/battery/battery.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';

const components = [
  BatteryScreenComponent,
  CreateBatteryScreenComponent,
  ListBatteryScreenComponent,
  BatteryComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, BatteriesRoutingModule, MaterialModule, SharedModule],
})
export class BatteriesModule {}

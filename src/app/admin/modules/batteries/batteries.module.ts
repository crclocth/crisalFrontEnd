import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteriesRoutingModule } from './batteries-routing.module';
import { BatteryScreenComponent } from './screens/battery-screen/battery-screen.component';
import { MaterialModule } from 'src/app/core/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
  imports: [
    CommonModule,
    BatteriesRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
  ],
})
export class BatteriesModule {}

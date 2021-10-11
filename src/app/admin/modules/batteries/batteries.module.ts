import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteriesRoutingModule } from './batteries-routing.module';
import { BatteryScreenComponent } from './screens/battery-screen/battery-screen.component';

@NgModule({
  declarations: [BatteryScreenComponent],
  imports: [CommonModule, BatteriesRoutingModule],
})
export class BatteriesModule {}

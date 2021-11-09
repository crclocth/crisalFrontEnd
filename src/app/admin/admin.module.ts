import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { MaterialModule } from '../core/material.module';

const components = [HomeScreenComponent, AccordionComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
})
export class AdminModule {}

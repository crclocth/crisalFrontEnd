import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';
import { EditInformationScreenComponent } from './screens/edit-information-screen/edit-information-screen.component';
import { MaterialModule } from 'src/app/core/material.module';

const components = [InformationScreenComponent, EditInformationScreenComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, InformationRoutingModule, MaterialModule],
})
export class InformationModule {}

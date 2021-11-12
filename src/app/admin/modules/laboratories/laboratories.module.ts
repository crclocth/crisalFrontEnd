import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratoriesRoutingModule } from './laboratories-routing.module';
import { LaboratoryScreenComponent } from './screens/laboratory-screen/laboratory-screen.component';
import { CreateLaboratoryScreenComponent } from './screens/create-laboratory-screen/create-laboratory-screen.component';
import { ListLaboratoryScreenComponent } from './screens/list-laboratory-screen/list-laboratory-screen.component';
import { LaboratoriesComponent } from './components/laboratories/laboratories.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  LaboratoryScreenComponent,
  CreateLaboratoryScreenComponent,
  ListLaboratoryScreenComponent,
  LaboratoriesComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    LaboratoriesRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class LaboratoriesModule {}

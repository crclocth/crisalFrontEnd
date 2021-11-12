import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeScreenComponent } from './screens/employee-screen/employee-screen.component';
import { AddEmployeeScreenComponent } from './screens/add-employee-screen/add-employee-screen.component';
import { ListEmployeeScreenComponent } from './screens/list-employee-screen/list-employee-screen.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

const components = [
  EmployeeScreenComponent,
  AddEmployeeScreenComponent,
  ListEmployeeScreenComponent,
  EmployeesComponent,
  DeleteModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components, EditModalComponent],
  imports: [CommonModule, EmployeesRoutingModule, MaterialModule, SharedModule],
})
export class EmployeesModule {}

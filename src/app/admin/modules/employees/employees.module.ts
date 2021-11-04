import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeScreenComponent } from './screens/employee-screen/employee-screen.component';
import { AddEmployeeScreenComponent } from './screens/add-employee-screen/add-employee-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeScreenComponent } from './screens/list-employee-screen/list-employee-screen.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialModule,
    SharedModule,
  ],
})
export class EmployeesModule {}

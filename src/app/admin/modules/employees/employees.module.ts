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


@NgModule({
  declarations: [
    EmployeeScreenComponent,
    AddEmployeeScreenComponent,
    ListEmployeeScreenComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }

import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee!: Employee;

  constructor() {}

  ngOnInit(): void {}
}

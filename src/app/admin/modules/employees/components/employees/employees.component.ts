import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less'],
})
export class EmployeesComponent implements OnInit {
  @Input() employee!: Employee;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

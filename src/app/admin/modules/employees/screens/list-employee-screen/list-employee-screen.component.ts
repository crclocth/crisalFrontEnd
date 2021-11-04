import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';

@Component({
  selector: 'app-list-employee-screen',
  templateUrl: './list-employee-screen.component.html',
  styleUrls: ['./list-employee-screen.component.less'],
})
export class ListEmployeeScreenComponent implements OnInit {
  public employeeArray: Employee[];
  constructor(private employeeProviderService: EmployeeProviderService) {
    this.employeeArray = [];
  }

  ngOnInit() {
    this.fetchEmployees();
  }

  addItem(event: any) {
    this.fetchEmployees();
  }

  async fetchEmployees() {
    try {
      this.employeeArray = await this.employeeProviderService
        .getEmployees()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

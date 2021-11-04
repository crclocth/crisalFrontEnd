import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exam-screen',
  templateUrl: './list-exam-screen.component.html',
  styleUrls: ['./list-exam-screen.component.less'],
})
export class ListExamScreenComponent implements OnInit {
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

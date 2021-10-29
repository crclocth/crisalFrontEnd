import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';

@Component({
  selector: 'app-list-employee-screen',
  templateUrl: './list-employee-screen.component.html',
  styleUrls: ['./list-employee-screen.component.less'],
})
export class ListEmployeeScreenComponent implements OnInit {
  public employees$: Observable<Employee[]>;
  public employeeArray: Employee[];
  constructor(private employeeProviderService: EmployeeProviderService) {
    this.employees$ = new Observable<Employee[]>();
    this.employeeArray = [];
  }

  ngOnInit() {
    this.fetchEmployees();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchEmployees();
    console.log('se cambio');
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  async fetchEmployees() {
    try {
      this.employees$ = await this.employeeProviderService.getEmployees();
      this.employees$.subscribe((news: Employee[]) => {
        this.employeeArray = news;
      });
    } catch (error) {
      console.log('error');
    }
  }
}

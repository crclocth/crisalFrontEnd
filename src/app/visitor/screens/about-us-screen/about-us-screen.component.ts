import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { Information } from 'src/app/core/models/information.model';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';
import { InformationProviderService } from 'src/app/core/providers/information/information-provider.service';

@Component({
  selector: 'app-about-us-screen',
  templateUrl: './about-us-screen.component.html',
  styleUrls: ['./about-us-screen.component.less'],
})
export class AboutUsScreenComponent implements OnInit {
  public informations$: Observable<Information[]>;
  public informationArray: Information[];
  public employees$: Observable<Employee[]>;
  public employeeArray: Employee[];

  constructor(
    private informationProviderService: InformationProviderService,
    private employeeProviderService: EmployeeProviderService
  ) {
    this.informations$ = new Observable<Information[]>();
    this.informationArray = [];
    this.employees$ = new Observable<Employee[]>();
    this.employeeArray = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchInformations();
    this.fetchEmployees();
    console.log('se cambio');
  }

  async ngOnInit() {
    this.fetchInformations();
    this.fetchEmployees();
  }

  async fetchInformations() {
    try {
      this.informations$ =
        await this.informationProviderService.getInformations();
      this.informations$.subscribe((information: Information[]) => {
        this.informationArray = information;
      });
    } catch (error) {
      console.log('error');
    }
  }

  async fetchEmployees() {
    try {
      this.employees$ = await this.employeeProviderService.getEmployees();
      this.employees$.subscribe((employee: Employee[]) => {
        this.employeeArray = employee;
      });
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

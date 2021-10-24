import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeProviderService {
  constructor(private httpService: HttpService) {}

  public postEmployee(employee: any): Observable<Employee> {
    return this.httpService.post('/employee', employee);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>('/employee');
  }

  public getEmployeeById(id: string): Observable<Employee> {
    return this.httpService.get<Employee>('/employee/' + id);
  }

  public async deleteEmployeeById(id: string): Promise<any> {
    await this.httpService.delete('/employee/' + id).toPromise();
  }

  public async patchEmployee(id: string, newEmployee: Employee): Promise<any> {
    await this.httpService
      .patch<Employee>('/employee/' + id, newEmployee)
      .toPromise();
  }
}

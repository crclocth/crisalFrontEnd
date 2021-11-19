import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentProviderService {
  constructor(private httpService: HttpService) {}

  public postAppointment(certification: Appointment): Observable<Appointment> {
    return this.httpService.post('/appointment', certification);
  }

  public getAppointments(): Observable<Appointment[]> {
    return this.httpService.get<Appointment[]>('/appointment');
  }

  public getAppointmentById(id: string): Observable<Appointment> {
    return this.httpService.get<Appointment>('/appointment/' + id);
  }

  public async deleteAppointmentById(id: string): Promise<any> {
    await this.httpService.delete('/appointment/' + id).toPromise();
  }

  public async patchAppointment(
    id: string,
    newCertification: Appointment
  ): Promise<any> {
    await this.httpService
      .patch<Appointment>('/appointment/' + id, newCertification)
      .toPromise();
  }
}

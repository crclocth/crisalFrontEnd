import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/doctor.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorProviderService {
  constructor(private httpService: HttpService) {}

  public postDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpService.post('/doctor', doctor);
  }

  public getDoctors(): Observable<Doctor[]> {
    return this.httpService.get<Doctor[]>('/doctor');
  }

  public getDoctorById(id: string): Observable<Doctor> {
    return this.httpService.get<Doctor>('/doctor/' + id);
  }

  public async deleteDoctorById(id: string): Promise<any> {
    await this.httpService.delete('/doctor/' + id).toPromise();
  }

  public async patchDoctor(id: string, doctor: Doctor): Promise<any> {
    await this.httpService.patch<Doctor>('/doctor/' + id, doctor).toPromise();
  }
}

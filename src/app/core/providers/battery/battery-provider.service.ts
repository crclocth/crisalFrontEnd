import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battery } from '../../models/battery.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class BatteryProviderService {
  constructor(private httpService: HttpService) {}

  public postBattery(battery: Battery): Observable<Battery> {
    return this.httpService.post('/battery', battery);
  }

  public getBatteries(): Observable<Battery[]> {
    return this.httpService.get<Battery[]>('/battery');
  }

  public getBatteryById(id: string): Observable<Battery> {
    return this.httpService.get<Battery>('/battery/' + id);
  }

  public async deleteBatteryById(id: string): Promise<any> {
    await this.httpService.delete('/battery/' + id).toPromise();
  }

  public async patchBattery(id: string, newBattery: Battery): Promise<any> {
    await this.httpService
      .patch<Battery>('/battery/' + id, newBattery)
      .toPromise();
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { AppointCompany } from 'src/app/core/models/appointCompany.model';
import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointCompanyProviderService } from 'src/app/core/providers/appointCompany/appoint-company-provider.service';
import { AppointmentProviderService } from 'src/app/core/providers/appointment/apointment-provider.service';

@Component({
  selector: 'app-confirm-appointment',
  templateUrl: './confirm-appointment.component.html',
  styleUrls: ['./confirm-appointment.component.less'],
})
export class ConfirmAppointmentComponent implements OnInit {
  public option: string;
  public appCompanyArray: AppointCompany[];
  public appPrivateArray: Appointment[];

  constructor(
    private appCompanyProviderService: AppointCompanyProviderService,
    private appPrivateProviderService: AppointmentProviderService
  ) {
    this.option = 'Empresa';
    this.appCompanyArray = [];
    this.appPrivateArray = [];
  }

  ngOnInit() {
    this.fetchAppointmentsCompany();
    this.fetchAppointmentsPrivate();
  }

  addItem(event: any) {
    this.fetchAppointmentsCompany();
    this.fetchAppointmentsPrivate();
  }

  setOption(option: string) {
    this.option = option;
  }

  async fetchAppointmentsCompany() {
    try {
      this.appCompanyArray = await this.appCompanyProviderService
        .getAppointCompanys()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  async fetchAppointmentsPrivate() {
    try {
      this.appPrivateArray = await this.appPrivateProviderService
        .getAppointments()
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

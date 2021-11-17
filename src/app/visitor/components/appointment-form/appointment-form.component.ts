import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.less'],
})
export class AppointmentFormComponent {
  public option: string;

  constructor() {
    this.option = '';
  }

  clickCompany(op: string) {
    if (op === 'yes') {
      this.option = 'yes';
    } else {
      if (op === 'no') {
        this.option = 'no';
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

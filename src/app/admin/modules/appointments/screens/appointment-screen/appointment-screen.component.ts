import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-screen',
  templateUrl: './appointment-screen.component.html',
  styleUrls: ['./appointment-screen.component.less'],
})
export class AppointmentScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getCurrentRoute(): string | void {
    console.log(this.router.url);

    let route = this.router.url;
    if (route === '/admin/agendarHoras/confirmar-horas') {
      return 'confirmar-horas';
    }
    if (route === '/admin/agendarHoras/horas-agendadas') {
      return 'horas-agendadas';
    }
  }

  /* myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }; */
}

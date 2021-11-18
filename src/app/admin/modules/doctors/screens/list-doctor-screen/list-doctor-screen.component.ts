import { Component, HostListener, OnInit } from '@angular/core';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorProviderService } from 'src/app/core/providers/doctor/doctor-provider.service';

@Component({
  selector: 'app-list-doctor-screen',
  templateUrl: './list-doctor-screen.component.html',
  styleUrls: ['./list-doctor-screen.component.less'],
})
export class ListDoctorScreenComponent implements OnInit {
  public doctorArray: Doctor[];
  constructor(private doctorProviderService: DoctorProviderService) {
    this.doctorArray = [];
  }

  ngOnInit() {
    this.fetchDoctors();
  }

  addItem(event: any) {
    this.fetchDoctors();
  }

  async fetchDoctors() {
    try {
      this.doctorArray = await this.doctorProviderService
        .getDoctors()
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

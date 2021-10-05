import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { VisitorComponent } from './visitor.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { AboutUsScreenComponent } from './screens/about-us-screen/about-us-screen.component';
import { NewsScreenComponent } from './screens/news-screen/news-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { AppointmentScreenComponent } from './screens/appointment-screen/appointment-screen.component';
import { DownloadCertificatesScreenComponent } from './screens/download-certificates-screen/download-certificates-screen.component';
import { ValidateCertificatesScreenComponent } from './screens/validate-certificates-screen/validate-certificates-screen.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MapComponent } from './components/map/map.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BatteryComponent } from './components/battery/battery.component';
import { NewComponent } from './components/new/new.component';
import { WorkerComponent } from './components/worker/worker.component';

const components = [
  HomeScreenComponent,
  VisitorComponent,
  AboutUsScreenComponent,
  ServicesScreenComponent,
  AboutUsScreenComponent,
  NewsScreenComponent,
  ContactScreenComponent,
  AppointmentScreenComponent,
  DownloadCertificatesScreenComponent,
  ValidateCertificatesScreenComponent,
  CarouselComponent,
  MapComponent,
  ClientsComponent,
  EmployeeComponent,
  BatteryComponent,
  NewComponent,
  WorkerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, VisitorRoutingModule, SharedModule],
})
export class VisitorModule {}

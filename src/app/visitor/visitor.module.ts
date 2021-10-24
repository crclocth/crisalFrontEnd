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
import { SwiperModule } from 'swiper/angular';
import { CardCertificateComponent } from './components/card-certificate/card-certificate.component';
import { CardClientComponent } from './components/card-client/card-client.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { ValidateFormComponent } from './components/validate-form/validate-form.component';
import { DownloadFormComponent } from './components/download-form/download-form.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AdminModule } from '../admin/admin.module';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { core } from '@angular/compiler';
import { CoreModule } from '../core/core.module';

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
  CardCertificateComponent,
  CardClientComponent,
  ContactFormComponent,
  AppointmentFormComponent,
  ValidateFormComponent,
  DownloadFormComponent,
  LoginScreenComponent,
  NewsDetailComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    SwiperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    AdminModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CoreModule,
  ],
})
export class VisitorModule {}

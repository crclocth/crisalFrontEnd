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

const components = [
  HomeScreenComponent,
  VisitorComponent,
  AboutUsScreenComponent,
  ServicesScreenComponent,
  ServicesScreenComponent,
  AboutUsScreenComponent,
  NewsScreenComponent,
  ContactScreenComponent,
  AppointmentScreenComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, VisitorRoutingModule, SharedModule],
})
export class VisitorModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsScreenComponent } from './screens/about-us-screen/about-us-screen.component';
import { AppointmentScreenComponent } from './screens/appointment-screen/appointment-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NewsScreenComponent } from './screens/news-screen/news-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { VisitorModule } from './visitor.module';

const routes: Routes = [
  {
    path: '',
    //component: VisitorModule,
    children: [
      { path: 'inicio', component: HomeScreenComponent },
      { path: 'quienes-somos', component: AboutUsScreenComponent },
      { path: 'servicios', component: ServicesScreenComponent },
      { path: 'agendar-hora', component: AppointmentScreenComponent },
      { path: 'noticias', component: NewsScreenComponent },
      { path: 'contactenos', component: ContactScreenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}

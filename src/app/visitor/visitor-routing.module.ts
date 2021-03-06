import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { AboutUsScreenComponent } from './screens/about-us-screen/about-us-screen.component';
import { AppointmentScreenComponent } from './screens/appointment-screen/appointment-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { DownloadCertificatesScreenComponent } from './screens/download-certificates-screen/download-certificates-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { NewsScreenComponent } from './screens/news-screen/news-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { ValidateCertificatesScreenComponent } from './screens/validate-certificates-screen/validate-certificates-screen.component';

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
      { path: 'noticias/detalle', component: NewsDetailComponent },
      { path: 'contactenos', component: ContactScreenComponent },
      {
        path: 'descargar-certificado',
        component: DownloadCertificatesScreenComponent,
      },
      {
        path: 'validar-certificado',
        component: ValidateCertificatesScreenComponent,
      },
      {
        path: 'plataforma',
        component: LoginScreenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}

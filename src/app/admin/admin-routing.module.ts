import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from '../admin/screens/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    children: [
      {
        path: 'certificados',
        loadChildren: () =>
          import('./modules/certificates/certificates.module').then(
            (m) => m.CertificatesModule
          ),
      },
      {
        path: 'agendarHoras',
        loadChildren: () =>
          import('./modules/appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'baterias',
        loadChildren: () =>
          import('./modules/batteries/batteries.module').then(
            (m) => m.BatteriesModule
          ),
      },
      {
        path: 'examenes',
        loadChildren: () =>
          import('./modules/exams/exams.module').then((m) => m.ExamsModule),
      },
      {
        path: 'empresas',
        loadChildren: () =>
          import('./modules/companies/companies.module').then(
            (m) => m.CompaniesModule
          ),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'certificaciones',
        loadChildren: () =>
          import('./modules/certifications/certifications.module').then(
            (m) => m.CertificationsModule
          ),
      },
      {
        path: 'empleados',
        loadChildren: () =>
          import('./modules/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: 'informacion',
        loadChildren: () =>
          import('./modules/information/information.module').then(
            (m) => m.InformationModule
          ),
      },
      {
        path: 'noticias',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'laboratorios',
        loadChildren: () =>
          import('./modules/laboratories/laboratories.module').then(
            (m) => m.LaboratoriesModule
          ),
      },
      {
        path: 'doctores',
        loadChildren: () =>
          import('./modules/doctors/doctors.module').then(
            (m) => m.DoctorsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/inicio',
    pathMatch: 'full',
  },
  {
    path: 'visitor',
    loadChildren: () =>
      import('./visitor/visitor.module').then(
        (VisitorModule) => VisitorModule.VisitorModule
      ),
  },
  {
    path: 'admin',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(
        (AdminModule) => AdminModule.AdminModule
      ),
  },
  {
    path: '**',
    redirectTo: 'visitor/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

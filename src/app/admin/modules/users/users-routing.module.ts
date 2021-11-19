import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScreenComponent } from './screens/user-screen/user-screen.component';

const routes: Routes = [
  { path: '', component: UserScreenComponent, pathMatch: 'full' },
  { path: '**', component: UserScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

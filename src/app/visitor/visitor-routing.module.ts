import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { VisitorModule } from './visitor.module';

const routes: Routes = [
  {
    path: '',
    //component: VisitorModule,
    children: [{ path: 'home', component: HomeScreenComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}

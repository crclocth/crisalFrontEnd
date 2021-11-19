import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewScreenComponent } from './screens/new-screen/new-screen.component';

const routes: Routes = [
  { path: '', component: NewScreenComponent, pathMatch: 'full' },
  { path: '**', component: NewScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}

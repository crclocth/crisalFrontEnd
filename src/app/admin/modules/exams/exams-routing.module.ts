import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamScreenComponent } from './screens/exam-screen/exam-screen.component';

const routes: Routes = [
  { path: '', component: ExamScreenComponent, pathMatch: 'full' },
  //{ path: 'crear', component: CertificateScreenComponent },
  { path: '**', component: ExamScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamScreenComponent } from './screens/exam-screen/exam-screen.component';

@NgModule({
  declarations: [ExamScreenComponent],
  imports: [CommonModule, ExamsRoutingModule],
})
export class ExamsModule {}

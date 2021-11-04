import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamScreenComponent } from './screens/exam-screen/exam-screen.component';
import { CreateExamScreenComponent } from './screens/create-exam-screen/create-exam-screen.component';
import { ListExamScreenComponent } from './screens/list-exam-screen/list-exam-screen.component';

@NgModule({
  declarations: [ExamScreenComponent, CreateExamScreenComponent, ListExamScreenComponent],
  imports: [CommonModule, ExamsRoutingModule],
})
export class ExamsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamScreenComponent } from './screens/exam-screen/exam-screen.component';
import { CreateExamScreenComponent } from './screens/create-exam-screen/create-exam-screen.component';
import { ListExamScreenComponent } from './screens/list-exam-screen/list-exam-screen.component';
import { ExamComponent } from './components/exam/exam.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  ExamScreenComponent,
  CreateExamScreenComponent,
  ListExamScreenComponent,
  ExamComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ExamsRoutingModule, MaterialModule, SharedModule],
})
export class ExamsModule {}

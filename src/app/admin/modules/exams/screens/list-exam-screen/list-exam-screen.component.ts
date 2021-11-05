import { Component, HostListener, OnInit } from '@angular/core';
import { Exam } from 'src/app/core/models/exam.modal';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';

@Component({
  selector: 'app-list-exam-screen',
  templateUrl: './list-exam-screen.component.html',
  styleUrls: ['./list-exam-screen.component.less'],
})
export class ListExamScreenComponent implements OnInit {
  public examArray: Exam[];
  constructor(private examProviderService: ExamProviderService) {
    this.examArray = [];
  }

  ngOnInit() {
    this.fetchExams();
  }

  addItem(event: any) {
    this.fetchExams();
  }

  async fetchExams() {
    try {
      this.examArray = await this.examProviderService.getExams().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

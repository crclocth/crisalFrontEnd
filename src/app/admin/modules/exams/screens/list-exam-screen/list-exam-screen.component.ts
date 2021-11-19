import { Component, HostListener, OnInit } from '@angular/core';
import { Exam } from 'src/app/core/models/exam.modal';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';

@Component({
  selector: 'app-list-exam-screen',
  templateUrl: './list-exam-screen.component.html',
  styleUrls: ['./list-exam-screen.component.less'],
})
export class ListExamScreenComponent implements OnInit {
  public examArray: Exam[] | null;
  constructor(private examProviderService: ExamProviderService) {
    this.examArray = [];
  }

  async ngOnInit() {
    this.examArray = await this.fetchExams('all');
  }

  async addItem(event: any) {
    this.examArray = await this.fetchExams('all');
  }

  /*  async fetchExams() {
    try {
      this.examArray = await this.examProviderService.getExams().toPromise();
    } catch (error) {
      console.log('error');
    }
  } */
  async fetchExams(type: string): Promise<Exam[] | null> {
    try {
      return await this.examProviderService.getExams(type).toPromise();
    } catch (error) {
      console.log('error');
      return null;
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

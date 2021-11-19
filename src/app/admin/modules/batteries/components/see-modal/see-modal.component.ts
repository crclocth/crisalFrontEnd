import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exam } from 'src/app/core/models/exam.modal';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';

@Component({
  selector: 'app-see-modal',
  templateUrl: './see-modal.component.html',
  styleUrls: ['./see-modal.component.less'],
})
export class SeeModalComponent implements OnInit {
  public battery: any;
  public arrayGeneral: string[];
  public arrayLaboratory: string[];
  public general: Exam[];
  public g!: Exam;
  public l!: Exam;
  public laboratory: Exam[];
  constructor(
    public activeModal: NgbActiveModal,
    private examProviderService: ExamProviderService
  ) {
    this.arrayGeneral = [];
    this.arrayLaboratory = [];
    this.general = [];
    this.laboratory = [];
  }

  async ngOnInit(): Promise<void> {
    await this.getarrayGeneral();
    await this.getarrayLaboratory();
  }

  async getarrayGeneral() {
    this.arrayGeneral = this.battery.generalExams;
    for (let i of this.arrayGeneral) {
      this.g = await this.examProviderService.getExamById(i).toPromise();
      this.general.push(this.g);
    }
    console.log(this.general);
  }

  async getarrayLaboratory() {
    this.arrayLaboratory = this.battery.labExams;
    for (let i of this.arrayLaboratory) {
      this.l = await this.examProviderService.getExamById(i).toPromise();
      this.laboratory.push(this.l);
    }
    console.log(this.laboratory);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

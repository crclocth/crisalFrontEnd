import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Exam } from 'src/app/core/models/exam.modal';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.less'],
})
export class ExamComponent implements OnInit {
  @Input() exam!: Exam;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private modalService: NgbModal, private dialog: MatDialog) {}

  ngOnInit() {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exam = this.exam;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    this.dialog
      .open(EditModalComponent, {
        width: '700px',
        data: {
          exam: this.exam,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        this.newItemEvent.emit(result);
      });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exam = this.exam;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

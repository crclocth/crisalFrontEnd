import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.less'],
})
export class DoctorComponent implements OnInit {
  @Input() doctor!: Doctor;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.doctor = this.doctor;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.doctor = this.doctor;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.doctor = this.doctor;
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

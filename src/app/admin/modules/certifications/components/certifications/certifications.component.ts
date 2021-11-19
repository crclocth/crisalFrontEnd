import {
  Component,
  HostListener,
  Input,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Certification } from 'src/app/core/models/certification.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.less'],
})
export class CertificationsComponent implements OnInit {
  @Input() certification!: Certification;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certification = this.certification;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certification = this.certification;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certification = this.certification;
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

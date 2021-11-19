import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/core/models/appointment.model';
import { DeleteModelPrivateComponent } from '../delete-model-private/delete-model-private.component';
import { SeeModelPrivateComponent } from '../see-model-private/see-model-private.component';

@Component({
  selector: 'app-appointment-private',
  templateUrl: './appointment-private.component.html',
  styleUrls: ['./appointment-private.component.less'],
})
export class AppointmentPrivateComponent implements OnInit {
  @Input() appPrivate!: Appointment;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModelPrivateComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.appPrivate = this.appPrivate;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModelPrivateComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.appPrivate = this.appPrivate;
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

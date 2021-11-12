import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Battery } from 'src/app/core/models/battery.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.less'],
})
export class BatteryComponent implements OnInit {
  @Input() battery!: Battery;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exam = this.battery;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exam = this.battery;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.exam = this.battery;
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

import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-see-modal',
  templateUrl: './see-modal.component.html',
  styleUrls: ['./see-modal.component.less'],
})
export class SeeModalComponent implements OnInit {
  public employee: any;
  public date: string;
  constructor(public activeModal: NgbActiveModal) {
    this.date = '';
  }

  ngOnInit(): void {
    console.log(this.employee);
    const datePipe = new DatePipe('en-US');
    this.date = datePipe.transform(this.employee.updatedAt, 'dd-MM-YYYY')!;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

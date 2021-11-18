import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-see-modal',
  templateUrl: './see-modal.component.html',
  styleUrls: ['./see-modal.component.less'],
})
export class SeeModalComponent implements OnInit {
  public doctor: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.doctor);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

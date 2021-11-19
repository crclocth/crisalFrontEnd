import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-see-model-private',
  templateUrl: './see-model-private.component.html',
  styleUrls: ['./see-model-private.component.less'],
})
export class SeeModelPrivateComponent implements OnInit {
  public appPrivate: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.appPrivate);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/core/models/news.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  @Input() news!: News;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'sm',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }

  openModalEdit() {
    const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

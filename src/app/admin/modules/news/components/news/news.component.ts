import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/core/models/news.model';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SeeModalComponent } from '../see-modal/see-modal.component';
import { Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NewsProviderService } from 'src/app/core/providers/news/news-provider.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  @Input() news!: News;
  @Output() newItemEvent = new EventEmitter<string>();
  public date: string;
  constructor(
    private modalService: NgbModal,
    private newsProviderService: NewsProviderService
  ) {
    this.date = '';
  }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    this.date = datePipe.transform(this.news.createdAt, 'dd-MM-YYYY')!;
  }

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalEdit() {
    const modalRef = this.modalService.open(EditModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  openModalSee() {
    const modalRef = this.modalService.open(SeeModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }

  hide() {
    this.news.visible = !this.news.visible;
    this.newsProviderService.patchNew(this.news._id!, this.news);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

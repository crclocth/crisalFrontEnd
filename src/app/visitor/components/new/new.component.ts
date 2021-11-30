import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/core/models/news.model';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  @Input() news!: News;
  @Output() newItemEvent = new EventEmitter<string>();
  public date!: string;

  constructor(private modalService: NgbModal) {
    this.date = '';
  }

  ngOnInit(): void {
    const datePipe = new DatePipe('en-US');
    this.date = datePipe.transform(this.news.createdAt, 'dd-MM-YYYY')!;
  }

  goToNewsDetailScreens() {
    const modalRef = this.modalService.open(NewsDetailComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.news = this.news;
    modalRef.result.then((result) => {
      console.log(result);
      this.newItemEvent.emit(result);
    });
  }
}

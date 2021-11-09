import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/core/models/news.model';
import { NewsDetailComponent } from '../news-detail/news-detail.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  @Input() news!: News;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

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

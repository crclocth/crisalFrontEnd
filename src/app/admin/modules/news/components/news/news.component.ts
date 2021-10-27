import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { News } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  @Input() news!: News;
  @Output() NewSelectedEmitter: EventEmitter<News>;
  public newSelected!: News;
  constructor() {
    this.NewSelectedEmitter = new EventEmitter();
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  SelectedNew() {
    this.newSelected = this.news;
    this.NewSelectedEmitter.emit(this.newSelected);
  }
}

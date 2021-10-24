import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  @Input() news!: News;

  constructor(public router: Router) {}

  goToNewsDetailScreens() {
    this.router.navigate(['/visitor/noticias/detalle']);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
})
export class AccordionComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goTo(Route: string) {
    this.route.navigate([`admin/${Route}`]);
  }
}

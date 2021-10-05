import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.less'],
})
export class BatteryComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = 'nombre';
  }

  ngOnInit(): void {}
}

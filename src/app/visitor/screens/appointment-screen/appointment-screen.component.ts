import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-appointment-screen',
  templateUrl: './appointment-screen.component.html',
  styleUrls: ['./appointment-screen.component.less'],
})
export class AppointmentScreenComponent implements OnInit {
  public dummy: Number[];
  public option: string;

  constructor() {
    this.dummy = new Array(1);
    this.option = '';
  }

  ngOnInit(): void {}

  /* addWorker() {
    for (var i = 0; i < this.dummy.length; i++) {
      this.dummy[i + 1] = this.dummy.push(1);
      console.log(this.dummy[i]);
    }
  } */
  clickCompany(op: string) {
    if (op === 'yes') {
      this.option = 'yes';
    } else {
      if (op === 'no') {
        this.option = 'no';
      }
    }
  }
}

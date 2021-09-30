import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
})
export class EmployeeComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  //public name: string;
  public profession: string;
  //public description: string;

  constructor() {
    this.name = 'nombre';
    this.profession = 'profesión';
    this.description = 'experiencia';
  }

  ngOnInit(): void {}
}

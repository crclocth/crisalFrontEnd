import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Results } from 'src/app/core/models/results.model';

@Component({
  selector: 'app-laboratory-exams',
  templateUrl: './laboratory-exams.component.html',
  styleUrls: ['./laboratory-exams.component.less'],
})
export class LaboratoryExamsComponent implements OnInit {
  @Input() batterySelect: any;
  public addressForm: FormGroup;
  public maxInputobservation: number;
  public state = ['Normal', 'Alterado'];
  public selection: string;
  //public resultArrayGeneral: Results[];

  constructor(private fb: FormBuilder) {
    this.maxInputobservation = 120;
    this.selection = '';
    this.addressForm = this.fb.group({
      result: [null],
    });
  }
  
  onSubmit(): void {}

  ngOnInit() {}

  public setOptionStates(option: string) {
    this.selection = option;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

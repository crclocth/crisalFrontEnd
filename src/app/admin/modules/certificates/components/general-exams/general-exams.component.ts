import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Results } from 'src/app/core/models/results.model';

@Component({
  selector: 'app-general-exams',
  templateUrl: './general-exams.component.html',
  styleUrls: ['./general-exams.component.less'],
})
export class GeneralExamsComponent implements OnInit {
  @Input() batterySelect: any;
  @Output() newItemEvent = new EventEmitter<Results[]>();
  public addressForm: FormGroup;
  public maxInputobservation: number;
  public state = ['Normal', 'Alterado'];
  public selection: string;
  public resultArrayGeneral: Results[];

  constructor(private fb: FormBuilder) {
    this.maxInputobservation = 120;
    this.selection = '';
    this.resultArrayGeneral = [];
    this.addressForm = this.fb.group({
      observation: [''],
      name: [''],
    });
  }

  get observation() {
    return this.addressForm.get('observation')?.value;
  }
  get name() {
    return this.addressForm.get('name')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {}

  public setOptionStates(option: string, name: string) {
    this.selection = option;
    console.log(this.selection);
    this.push(name);
    this.reset();
  }

  reset() {
    this.addressForm.controls.observation.setValue('');
    this.addressForm.controls.observation.setErrors(null);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  push(name: string) {
    const info: Results = {
      exam: name,
      status: this.selection,
      remark: this.observation,
    };
    console.log(info);
    this.resultArrayGeneral.push(info);
    console.log(this.resultArrayGeneral);
    this.newItemEvent.emit(this.resultArrayGeneral);
  }
}

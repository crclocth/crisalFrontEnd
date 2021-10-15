import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.less'],
})
export class AppointmentFormComponent {
  public dummy: Number[];
  public option: string;
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public addressForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dummy = new Array(1);
    this.option = '';
    this.hasUnitNumber = false;
    this.addressForm = this.fb.group({
      firstName: [null, Validators.required],
      address: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
    this.addressForm2 = this.fb.group({
      partName: [null, Validators.required],
      partRut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      partMail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      partBattery: [null, Validators.required],
    });
  }

  get partName() {
    return this.addressForm.get('partName')?.value;
  }
  get partRut() {
    return this.addressForm.get('partRut')?.value;
  }
  get partMail() {
    return this.addressForm.get('partMail')?.value;
  }
  get partBattery() {
    return this.addressForm.get('partBattery')?.value;
  }

  onSubmit(): void {
    alert('Thanks!');
  }

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

  public validateRut() {
    let rut = this.partRut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid);
  }
}

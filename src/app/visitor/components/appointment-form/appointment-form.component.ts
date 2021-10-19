import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.less'],
})
export class AppointmentFormComponent {
  public toppings;
  public toppingList: string[];
  public dummy: Number[];
  public option: string;
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public addressForm2: FormGroup;
  public maxInputTask: number;
  public maxInputNameCompany: number;
  public maxInputMailCompany: number;
  public maxInputNamePart: number;
  public maxInputMailPart: number;

  constructor(private fb: FormBuilder) {
    this.toppings = new FormControl();
    this.toppingList = [
      'Extra cheese',
      'Mushroom',
      'Onion',
      'Pepperoni',
      'Sausage',
      'Tomato',
    ];
    this.dummy = new Array(1);
    this.option = '';
    this.hasUnitNumber = false;
    this.maxInputTask = 120;
    this.maxInputNameCompany = 120;
    this.maxInputMailPart = 320;
    this.maxInputNamePart = 120;
    this.maxInputMailCompany = 320;
    this.addressForm = this.fb.group({
      companyName: [null, Validators.required],
      companyRut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      task: [null, Validators.required],
      companyMail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
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
  get companyName() {
    return this.addressForm.get('companyName')?.value;
  }
  get companyRut() {
    return this.addressForm.get('companyRut')?.value;
  }
  get task() {
    return this.addressForm.get('task')?.value;
  }
  get companyMail() {
    return this.addressForm.get('companyMail')?.value;
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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}

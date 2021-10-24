import { Component, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-certificate-screen',
  templateUrl: './create-certificate-screen.component.html',
  styleUrls: ['./create-certificate-screen.component.less'],
})
export class CreateCertificateScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputAge: number;
  public maxInputposition: number;
  public certArray;
  public certArrayList: string[];
  public companyArray;
  public companyArrayList: string[];
  public batteryArray;
  public batteryArrayList: string[];

  constructor(private fb: FormBuilder) {
    this.certArray = new FormControl();
    this.certArrayList = ['Extra cheese', 'Mushroom'];
    this.companyArray = new FormControl();
    this.companyArrayList = ['Extra cheese', 'Mushroom'];
    this.batteryArray = new FormControl();
    this.batteryArrayList = ['Extra cheese', 'Mushroom'];
    this.maxInputName = 120;
    this.maxInputProfession = 500;
    this.maxInputAge = 1;
    this.maxInputposition = 1;
    this.addressForm = this.fb.group({
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      name: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      position: [null, [Validators.required]],
      pulse: [null, [Validators.required]],
      pa: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      height: [null, [Validators.required]],
      imc: [null, [Validators.required]],
      sat02: [null, [Validators.required]],
    });

    this.hasUnitNumber = false;
  }

  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get name() {
    return this.addressForm.get('name')?.value;
  }
  get age() {
    return this.addressForm.get('age')?.value;
  }
  get position() {
    return this.addressForm.get('position')?.value;
  }
  get pulse() {
    return this.addressForm.get('pulse')?.value;
  }
  get pa() {
    return this.addressForm.get('pa')?.value;
  }
  get weight() {
    return this.addressForm.get('weight')?.value;
  }
  get height() {
    return this.addressForm.get('height')?.value;
  }
  get imc() {
    return this.addressForm.get('imc')?.value;
  }
  get sat02() {
    return this.addressForm.get('sat02')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}

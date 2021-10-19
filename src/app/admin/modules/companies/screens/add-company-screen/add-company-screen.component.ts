import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company-screen',
  templateUrl: './add-company-screen.component.html',
  styleUrls: ['./add-company-screen.component.less'],
})
export class AddCompanyScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputTask: number;

  constructor(private fb: FormBuilder) {
    this.maxInputName = 120;
    this.maxInputTask = 120;
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      task: [null, [Validators.required]],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });

    this.hasUnitNumber = false;
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get task() {
    return this.addressForm.get('task')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

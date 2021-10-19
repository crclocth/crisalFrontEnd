import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-certification-screen',
  templateUrl: './add-certification-screen.component.html',
  styleUrls: ['./add-certification-screen.component.less'],
})
export class AddCertificationScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;

  constructor(private fb: FormBuilder) {
    this.maxInputName = 120;
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });

    this.hasUnitNumber = false;
  }

  get rut() {
    return this.addressForm.get('rut')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}

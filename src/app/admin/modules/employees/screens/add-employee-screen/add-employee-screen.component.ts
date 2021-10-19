import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-screen',
  templateUrl: './add-employee-screen.component.html',
  styleUrls: ['./add-employee-screen.component.less'],
})
export class AddEmployeeScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInput: number;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputContent: number;

  constructor(private fb: FormBuilder) {
    this.maxInputName = 120;
    this.maxInputProfession = 500;
    this.maxInputContent = 500;
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      profession: ['', [Validators.required]],
      content: [null, [Validators.required]],
    });
    this.hasUnitNumber = false;
    this.maxInput = 250;
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get profession() {
    return this.addressForm.get('profession')?.value;
  }
  get content() {
    return this.addressForm.get('content')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

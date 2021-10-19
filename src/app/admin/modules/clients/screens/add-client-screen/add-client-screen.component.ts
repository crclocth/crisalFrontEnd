import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client-screen',
  templateUrl: './add-client-screen.component.html',
  styleUrls: ['./add-client-screen.component.less'],
})
export class AddClientScreenComponent {
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

  get title() {
    return this.addressForm.get('title')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}

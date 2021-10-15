import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
})
export class ContactFormComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    this.hasUnitNumber = false;
  }

  get firstName() {
    return this.addressForm.get('firstName')?.value;
  }
  get address() {
    return this.addressForm.get('address')?.value;
  }
  get subject() {
    return this.addressForm.get('subject')?.value;
  }
  get message() {
    return this.addressForm.get('message')?.value;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

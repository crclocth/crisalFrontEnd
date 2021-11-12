import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
})
export class ContactFormComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputMessage: number;
  public maxInputName: number;
  public maxInputMail: number;
  public maxInputsubject: number;

  constructor(
    private fb: FormBuilder,
    private contacProviderService: ContactProviderService
  ) {
    this.addressForm = this.fb.group({
      name: [null, Validators.required],
      mail: [
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
    this.maxInputMessage = 250;
    this.maxInputName = 120;
    this.maxInputMail = 320;
    this.maxInputsubject = 30;
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }
  get subject() {
    return this.addressForm.get('subject')?.value;
  }
  get message() {
    return this.addressForm.get('message')?.value;
  }

  get form() {
    return this.addressForm.controls;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

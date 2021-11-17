import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

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
  public message2: string = '';

  constructor(
    private fb: FormBuilder,
    private contactProviderService: ContactProviderService,
    private notificationService: NotificationService
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

  public postContact() {
    let { date } = this.addressForm.value;
    const info: Contact = {
      name: this.name,
      email: this.mail,
      subject: this.subject,
      message: this.message,
    };
    try {
      this.message2 = 'Se guardaron los datos.';
      this.contactProviderService.postContact(info).toPromise();
      console.log(info);
      this.notificationService.success('Se Envió correctamente el Contacto');
      window.location.reload();
    } catch (error) {
      this.notificationService.error('Error al Enviar el Contacto');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {}
}

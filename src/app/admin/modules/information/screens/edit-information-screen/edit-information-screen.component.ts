import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';

@Component({
  selector: 'app-edit-information-screen',
  templateUrl: './edit-information-screen.component.html',
  styleUrls: ['./edit-information-screen.component.less'],
})
export class EditInformationScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputTelephone1: number;
  public maxInputTelephone2: number;
  public maxInputAddress: number;
  public maxInputMail: number;
  public maxInputAboutUs: number;
  public maxInputVision: number;
  public maxInputMission: number;
  public maxInputValues: number;

  constructor(private fb: FormBuilder) {
    this.maxInputTelephone1 = 10;
    this.maxInputTelephone2 = 10;
    this.maxInputAddress = 60;
    this.maxInputMail = 320;
    this.maxInputAboutUs = 500;
    this.maxInputVision = 500;
    this.maxInputMission = 500;
    this.maxInputValues = 500;
    this.addressForm = this.fb.group({
      telephone1: [null, [Validators.required]],
      telephone2: [null, [Validators.required]],
      address: ['', [Validators.required]],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      aboutUs: [null, [Validators.required]],
      vision: [null, [Validators.required]],
      mission: [null, [Validators.required]],
      values: [null, [Validators.required]],
    });
    this.hasUnitNumber = false;
  }

  get telephone() {
    return this.addressForm.get('telephone')?.value;
  }
  get address() {
    return this.addressForm.get('address')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }
  get aboutUs() {
    return this.addressForm.get('aboutUs')?.value;
  }
  get vision() {
    return this.addressForm.get('vision')?.value;
  }
  get mission() {
    return this.addressForm.get('mission')?.value;
  }
  get values() {
    return this.addressForm.get('values')?.value;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

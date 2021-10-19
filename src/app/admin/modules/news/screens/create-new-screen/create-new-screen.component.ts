import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';

@Component({
  selector: 'app-create-new-screen',
  templateUrl: './create-new-screen.component.html',
  styleUrls: ['./create-new-screen.component.less'],
})
export class CreateNewScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputTitle: number;
  public maxInputLead: number;
  public maxInputContent: number;

  constructor(private fb: FormBuilder) {
    this.maxInputTitle = 60;
    this.maxInputLead = 60;
    this.maxInputContent = 500;
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
      lead: ['', [Validators.required]],
      content: [null, [Validators.required]],
    });

    this.hasUnitNumber = false;
  }

  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get lead() {
    return this.addressForm.get('lead')?.value;
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

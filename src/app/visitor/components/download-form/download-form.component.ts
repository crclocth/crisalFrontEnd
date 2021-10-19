import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.less'],
})
export class DownloadFormComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      code: ['', [Validators.required]],
    });
    this.hasUnitNumber = false;
  }

  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get code() {
    return this.addressForm.get('code')?.value;
  }

  public validateRut() {
    let rut = this.rut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}

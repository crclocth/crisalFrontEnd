import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.less'],
})
export class ContactScreenComponent implements OnInit {
  checkoutForm: FormGroup;
  mensaje: string = '';
  isDivVisible = false;

  constructor() {
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  createFormGroup() {
    return new FormGroup({
      usuario2: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      asunto: new FormControl('', [Validators.required]),
      tex: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.mensaje = 'Sugerencia Enviada.';
    this.isDivVisible = true;
  }

  get usuario2() {
    return this.checkoutForm.get('usuario2')?.value;
  }
  get asunto() {
    return this.checkoutForm.get('asunto')?.value;
  }
  get tex() {
    return this.checkoutForm.get('tex')?.value;
  }
}

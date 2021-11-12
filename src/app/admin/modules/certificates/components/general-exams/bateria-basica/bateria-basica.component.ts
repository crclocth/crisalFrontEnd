import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bateria-basica',
  templateUrl: './bateria-basica.component.html',
  styleUrls: ['./bateria-basica.component.less'],
})
export class BateriaBasicaComponent implements OnInit {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputobservationsAudio: number;
  public maxInputobservationsOpto: number;
  public maxInputobservationsBalance: number;
  public maxInputobservationsEcg: number;

  constructor(private fb: FormBuilder) {
    this.maxInputobservationsAudio = 120;
    this.maxInputobservationsOpto = 120;
    this.maxInputobservationsBalance = 120;
    this.maxInputobservationsEcg = 120;
    this.hasUnitNumber = false;

    this.addressForm = this.fb.group({
      observationsAudio: [''],
      observationsOpto: [''],
      observationsBalance: [''],
      observationsEcg: [''],
    });
  }

  get observationsAudio() {
    return this.addressForm.get('observationsAudio')?.value;
  }
  get observationsOpto() {
    return this.addressForm.get('observationsOpto')?.value;
  }
  get observationsBalance() {
    return this.addressForm.get('observationsBalance')?.value;
  }
  get observationsEcg() {
    return this.addressForm.get('observationsEcg')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

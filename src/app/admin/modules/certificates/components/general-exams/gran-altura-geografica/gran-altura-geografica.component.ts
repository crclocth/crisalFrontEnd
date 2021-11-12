import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gran-altura-geografica',
  templateUrl: './gran-altura-geografica.component.html',
  styleUrls: ['./gran-altura-geografica.component.less'],
})
export class GranAlturaGeograficaComponent implements OnInit {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputobservationsAudio: number;
  public maxInputobservationsOpto: number;
  public maxInputobservationsBalance: number;
  public maxInputobservationsEcg: number;
  public maxInputobservationsLake: number;
  public maxInputobservationsfram: number;
  public maxInputobservationsTorax: number;

  constructor(private fb: FormBuilder) {
    this.maxInputobservationsAudio = 120;
    this.maxInputobservationsOpto = 120;
    this.maxInputobservationsBalance = 120;
    this.maxInputobservationsEcg = 120;
    this.maxInputobservationsLake = 120;
    this.maxInputobservationsfram = 120;
    this.maxInputobservationsTorax = 120;
    this.hasUnitNumber = false;

    this.addressForm = this.fb.group({
      observationsAudio: [''],
      observationsopto: [''],
      observationsbalance: [''],
      observationsecg: [''],
      observationsLake: [''],
      observationsFram: [''],
      observationsTorax: [''],
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
  get observationsLake() {
    return this.addressForm.get('observationsLake')?.value;
  }
  get observationsFram() {
    return this.addressForm.get('observationsFram')?.value;
  }
  get observationsTorax() {
    return this.addressForm.get('observationsTorax')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Company } from 'src/app/core/models/company.modal';
import { CompanyProviderService } from 'src/app/core/providers/company/company-provider.service';

@Component({
  selector: 'app-create-certificate-screen',
  templateUrl: './create-certificate-screen.component.html',
  styleUrls: ['./create-certificate-screen.component.less'],
})
export class CreateCertificateScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputNameCertificate: number;
  public maxInputNameCompany: number;
  public maxInputBattery: number;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputAge: number;
  public maxInputposition: number;
  public optionsCertificateName: string[] = [
    'Altura Física',
    'Gran Altura Geográfica',
    'Espacios Confinados',
    'Psicosensotécnico',
    'Batería Básica',
    'Espacios Confinados',
    'Exámenes de Solventes',
    'Agentes Productores de Asma',
    'Aversión al Riesgo',
  ];
  public optionsBaterry: string[] = [
    'Altura Física',
    'Gran Altura Geográfica',
    'Espacios Confinados',
    'Psicosensotécnico',
    'Batería Básica',
    'Espacios Confinados',
    'Exámenes de Solventes',
    'Agentes Productores de Asma',
    'Aversión al Riesgo',
  ];
  public companyArray: Company[];
  public companySelect: Company | null;
  public imcc: number;
  public selectedVi: number;

  constructor(
    private fb: FormBuilder,
    private companyProviderService: CompanyProviderService
  ) {
    this.maxInputNameCertificate = 120;
    this.maxInputNameCompany = 120;
    this.maxInputBattery = 120;
    this.maxInputName = 120;
    this.maxInputProfession = 500;
    this.maxInputAge = 2;
    this.maxInputposition = 120;
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
      NameCertificate: ['', [Validators.required]],
      NameCompany: ['', [Validators.required]],
      NameBattery: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      position: [null, [Validators.required]],
      pulse: [null, [Validators.required, Validators.pattern('[0-9]{1,2,3}')]],
      pa: [
        null,
        [Validators.required, Validators.pattern('[0-9]{1,3}/[0-9]{1,3}')],
      ],
      weight: [
        null,
        [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{1,2}')],
      ],
      height: [
        null,
        [Validators.required, Validators.pattern('[0-9]{1}.[0-9]{1,2}')],
      ],
      imc: [null, [Validators.required]],
      sat02: [null, [Validators.required, Validators.pattern('[0-9]{1,2}')]],
    });
    this.companyArray = [];
    this.hasUnitNumber = false;
    this.companySelect = null;
    this.imcc = 0;
    this.selectedVi = 0;
  }

  get NameCertificate() {
    return this.addressForm.get('NameCertificate')?.value;
  }
  /* get NameBattery() {
    return this.addressForm.get('NameBattery')?.value;
  } */
  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get name() {
    return this.addressForm.get('name')?.value;
  }
  get age() {
    return this.addressForm.get('age')?.value;
  }
  get position() {
    return this.addressForm.get('position')?.value;
  }
  get pulse() {
    return this.addressForm.get('pulse')?.value;
  }
  get pa() {
    return this.addressForm.get('pa')?.value;
  }
  get weight() {
    return this.addressForm.get('weight')?.value;
  }
  get height() {
    return this.addressForm.get('height')?.value;
  }
  get imc() {
    return this.addressForm.get('imc')?.value;
  }
  get sat02() {
    return this.addressForm.get('sat02')?.value;
  }

  async ngOnInit() {
    await this.fetchCompanies();
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  async fetchCompanies() {
    try {
      this.companyArray = await this.companyProviderService
        .getCompanies()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  public setOptionComapny(event: MatAutocompleteSelectedEvent) {
    let option = event.option.value;
    this.companySelect = option;
    console.log(this.companySelect);
  }

  public getIMC() {
    if (this.weight && this.height) {
      let al = this.height;
      let pes = this.weight;
      let alw = al * al;
      this.imcc = pes / alw;
    }
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

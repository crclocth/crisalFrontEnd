import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { DateAdapter } from '@angular/material/core';
import { Battery } from 'src/app/core/models/battery.model';
import { Certificate } from 'src/app/core/models/certificate.model';
import { Company } from 'src/app/core/models/company.modal';
import { Doctor } from 'src/app/core/models/doctor.model';
import { Exam } from 'src/app/core/models/exam.modal';
import { Results } from 'src/app/core/models/results.model';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';
import { CertificateProviderService } from 'src/app/core/providers/certificate/certificate-provider.service';
import { CompanyProviderService } from 'src/app/core/providers/company/company-provider.service';
import { DoctorProviderService } from 'src/app/core/providers/doctor/doctor-provider.service';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-certificate-screen',
  templateUrl: './create-certificate-screen.component.html',
  styleUrls: ['./create-certificate-screen.component.less'],
})
export class CreateCertificateScreenComponent {
  public addressForm: FormGroup;
  public maxInputNameCertificate: number;
  public maxInputName: number;
  public maxInputposition: number;
  public companyArray: Company[];
  public batteryArray: Battery[];
  public certificateArray: Certificate[];
  public companySelect: Company | null;
  public batterySelect: any;
  public imcc: number;
  public selectedVi: string;
  public selectedInd: string;
  public selectedconclusion: string;
  public doctorSelect: Doctor | null;
  public message2: string = '';
  public conclusionArray = [
    'Sin contraindicaciones para laborar en Altura Física y Andamios.',
    'Con contraindicaciones para laborar en Altura Física y Andamios.',
    'Sin contraindicaciones para laborar, según examen realizado.',
    'Con contraindicaciones para laborar, según examen realizado.',
  ];
  public vigenciaArray = ['Apto', 'No Apto', 'Aprobado', 'No Aprobado'];
  public indicationArray = ['Sin Indicaciones'];
  public doctorArray: Doctor[];
  public general: Exam[] = [];
  public laboratory: Exam[] = [];
  public arrayGeneral: any;
  public arrayLaboratory: any;
  public resultArrayGeneral: Results[];

  constructor(
    private fb: FormBuilder,
    private companyProviderService: CompanyProviderService,
    private batteryProviderService: BatteryProviderService,
    private notificationService: NotificationService,
    private certificateProviderService: CertificateProviderService,
    private dateAdapter: DateAdapter<Date>,
    private examProviderService: ExamProviderService,
    private doctorProviderService: DoctorProviderService
  ) {
    this.dateAdapter.setLocale('es');
    this.maxInputNameCertificate = 120;
    this.maxInputName = 120;
    this.maxInputposition = 120;
    this.addressForm = this.fb.group({
      NameCertificate: ['', [Validators.required]],
      date: ['', [Validators.required]],
      datee: ['', [Validators.required]],
      NameCompany: ['', [Validators.required]],
      NameBattery: ['', [Validators.required]],
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      name: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      position: [null, [Validators.required]],
      pulse: [null, [Validators.required, Validators.pattern('[0-9]{1,3}')]],
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
      conclusion: [''],
      selectedVigencia: [''],
      doctor: [''],
    });
    this.companyArray = [];
    this.batteryArray = [];
    this.certificateArray = [];
    this.companySelect = null;
    this.batterySelect = null;
    this.imcc = 0;
    this.selectedVi = '';
    this.selectedInd = '';
    this.selectedconclusion = '';
    this.doctorSelect = null;
    this.resultArrayGeneral = [];
    this.doctorArray = [];
  }

  get NameCertificate() {
    return this.addressForm.get('NameCertificate')?.value;
  }
  get date() {
    return this.addressForm.get('date')?.value;
  }
  get datee() {
    return this.addressForm.get('datee')?.value;
  }
  get NameCompany() {
    return this.addressForm.get('NameCompany')?.value;
  }
  get NameBattery() {
    return this.addressForm.get('NameBattery')?.value;
  }
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
  get conclusion() {
    return this.addressForm.get('conclusion')?.value;
  }
  get selectedVigencia() {
    return this.addressForm.get('selectedVigencia')?.value;
  }
  get doctor() {
    return this.addressForm.get('doctor')?.value;
  }

  async ngOnInit() {
    await this.fetchCompanies();
    await this.fetchBatteries();
    await this.fetchCertificates();
    await this.fetchDoctors();
  }

  onSubmit(): void {}

  async fetchCompanies() {
    try {
      this.companyArray = await this.companyProviderService
        .getCompanies()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  async fetchBatteries() {
    try {
      this.batteryArray = await this.batteryProviderService
        .getBatteries()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }
  async fetchDoctors() {
    try {
      this.doctorArray = await this.doctorProviderService
        .getDoctors()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  async fetchCertificates() {
    try {
      this.certificateArray = await this.certificateProviderService
        .getCertificates()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  /* public setOptionComapny(event: MatAutocompleteSelectedEvent) {
    let option = event.option.value;
    this.companySelect = option;
    console.log(this.companySelect);
  } */

  changeVigencia(value: any) {
    this.selectedVi = value;
    console.log(value);
  }

  changeInd(value: any) {
    this.selectedInd = value;
    console.log(value);
  }

  public setOptionCompany(option: Company) {
    this.companySelect = option;
  }

  public setOptionDoctor(option: Doctor) {
    this.doctorSelect = option;
  }

  public setOptionconclusion(option: string) {
    this.selectedconclusion = option;
  }

  public setOptionIndication(option: string) {
    this.selectedInd = option;
  }

  public async setOptionBattery(option: Battery) {
    this.batterySelect = option;
    this.arrayGeneral = option.generalExams;
    this.arrayLaboratory = option.labExams;
    for (let i of option.generalExams) {
      const g = await this.examProviderService.getExamById(i).toPromise();
      this.general.push(g);
    }
    for (let i of option.labExams) {
      const l = await this.examProviderService.getExamById(i).toPromise();
      this.laboratory.push(l);
    }
    console.log(this.general);
    console.log(this.laboratory);

    for (let batteryExam of this.general) {
      const newExam: Results = {
        exam: batteryExam.name,
        status: '',
        remark: '',
      };
      this.resultArrayGeneral.push(newExam);
      console.log(this.resultArrayGeneral);
    }
  }

  public getIMC() {
    if (this.weight && this.height) {
      let al = this.height;
      let pes = this.weight;
      let alw = al * al;
      this.imcc = pes / alw;
    }
  }

  public addItem(newItem: Results[]) {
    console.log(newItem);
  }

  notInArray(): boolean {
    for (let i = 0; i < this.certificateArray.length; i++) {
      if (this.name === this.certificateArray[i].title) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postCertificate() {
    let { date } = this.addressForm.value;
    if (this.notInArray() === true) {
      const info: Certificate = {
        title: this.NameCertificate,
        date: this.date,
        conclusion: this.selectedconclusion,
        suggestions: this.selectedInd,
        validity: this.selectedVi,
        validityDate: this.datee,
        doctor: this.doctorSelect!,
        company: {
          rut: this.companySelect!.rut,
          name: this.companySelect!.name,
          email: this.companySelect!.email,
          faena: this.companySelect!.faena,
        },
        examinee: {
          rut: this.rut,
          name: this.name,
          age: this.age,
          jobTitle: this.position,
        },
        physiological: {
          heartRate: this.pulse,
          bloodPressure: this.pa,
          weight: this.weight,
          height: this.height,
          imc: this.imcc,
          sat: this.sat02,
        },
      };
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.certificateProviderService.postCertificate(info).toPromise();
        console.log(info);

        this.notificationService.success(
          'Se Agregó correctamente el Certificado'
        );
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar el Certificado');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Certificado');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

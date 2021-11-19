import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { rutTools } from 'prettyutils';
import { AppointCompany } from 'src/app/core/models/appointCompany.model';
import { Appointment } from 'src/app/core/models/appointment.model';
import { Battery } from 'src/app/core/models/battery.model';
import { Examinee } from 'src/app/core/models/examinee.model';
import { AppointCompanyProviderService } from 'src/app/core/providers/appointCompany/appoint-company-provider.service';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-appointment-company',
  templateUrl: './appointment-company.component.html',
  styleUrls: ['./appointment-company.component.less'],
})
export class AppointmentCompanyComponent {
  public option: string;
  public addressForm: FormGroup;
  public formArray: FormArray;
  public maxInputTask: number;
  public maxInputNameCompany: number;
  public maxInputMailCompany: number;
  public maxInputNamePart: number;
  public maxInputMailPart: number;
  public batteryArray: Battery[];
  public batterySelect: string;
  public examineesArray: Appointment[];

  constructor(
    private fb: FormBuilder,
    private batteryProviderService: BatteryProviderService,
    private appointCompanyProviderService: AppointCompanyProviderService,
    private notificationService: NotificationService
  ) {
    this.option = '';
    this.maxInputTask = 120;
    this.maxInputNameCompany = 120;
    this.maxInputMailPart = 320;
    this.maxInputNamePart = 120;
    this.maxInputMailCompany = 320;
    this.batteryArray = [];
    this.examineesArray = [];
    this.batterySelect = '';

    this.formArray = this.fb.array([]);
    this.formArray.push(
      this.fb.group({
        examineeName: ['', Validators.required],
        examineeRut: [
          '',
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
        examineeAge: [
          '',
          Validators.required,
          Validators.pattern('[0-9]{1,2}'),
        ],
        examineeJob: ['', Validators.required],
        examineeBattery: ['', Validators.required],
      })
    );
    this.addressForm = this.fb.group({
      examinees: this.formArray,
      companyName: [null, Validators.required],
      companyRut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      task: [null, Validators.required],
      companyMail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      date: [null, Validators.required],
    });
  }

  get companyName() {
    return this.addressForm.get('companyName')?.value;
  }
  get companyRut() {
    return this.addressForm.get('companyRut')?.value;
  }
  get task() {
    return this.addressForm.get('task')?.value;
  }
  get companyMail() {
    return this.addressForm.get('companyMail')?.value;
  }
  get date() {
    return this.addressForm.get('date')?.value;
  }

  onSubmit(): void {}

  async ngOnInit() {
    await this.fetchBatteries();
    //console.log(this.addressForm);
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

  public validateRut() {
    /* let rut = this.partRut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid); */
  }

  public postApp() {
    this.createExaminees();
    let { date, batterySelect } = this.addressForm.value;
    const info: AppointCompany = {
      name: this.companyName,
      rut: this.companyRut,
      faena: this.task,
      email: this.companyMail,
      date: this.date,
      isConfirmed: false,
      examinees: this.examineesArray,
    };
    try {
      this.appointCompanyProviderService.postAppointCompany(info).toPromise();
      console.log(info);
      this.notificationService.success('Se Envió correctamente el Formulario');
    } catch (error) {
      this.notificationService.error('Error al Enviar el Formulario');
    }
  }

  getFormArray() {
    return this.addressForm.get('examinees') as FormArray;
  }

  getFormArrayControls() {
    return (this.addressForm.get('examinees') as FormArray).value;
  }

  newExaminee() {
    return this.fb.group({
      examineeName: ['', Validators.required],
      examineeRut: ['', Validators.required],
      examineeAge: ['', Validators.required],
      examineeJob: ['', Validators.required],
      examineeBattery: ['', Validators.required],
    });
  }

  addExaminee() {
    this.getFormArray().push(this.newExaminee());
  }

  removeExaminee(i: number) {
    this.getFormArray().removeAt(i);
  }

  createExaminees() {
    for (let index of this.getFormArray().controls) {
      let dato: Appointment;
      dato = {
        rut: index.value.examineeRut,
        name: index.value.examineeName,
        age: index.value.examineeAge,
        battery: index.value.examineeBattery,
        jobTitle: index.value.examineeJob,
        isConfirmed: false,
      };
      this.examineesArray.push(dato);
    }
    console.log(this.examineesArray);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };
}

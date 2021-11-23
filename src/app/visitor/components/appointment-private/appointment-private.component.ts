import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutTools } from 'prettyutils';
import { Battery } from 'src/app/core/models/battery.model';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';
import { DateAdapter } from '@angular/material/core';
import { Appointment } from 'src/app/core/models/appointment.model';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { AppointmentProviderService } from 'src/app/core/providers/appointment/apointment-provider.service';

@Component({
  selector: 'app-appointment-private',
  templateUrl: './appointment-private.component.html',
  styleUrls: ['./appointment-private.component.less'],
})
export class AppointmentPrivateComponent {
  public addressForm: FormGroup;
  public maxInputTask: number;
  public maxInputNamePart: number;
  public maxInputMailPart: number;
  public batteryArray: Battery[];
  public batterySelect: string;

  constructor(
    private fb: FormBuilder,
    private batteryProviderService: BatteryProviderService,
    private dateAdapter: DateAdapter<Date>,
    private appointmentProviderService: AppointmentProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputTask = 120;
    this.dateAdapter.setLocale('es');
    this.maxInputMailPart = 320;
    this.maxInputNamePart = 120;
    this.batteryArray = [];
    this.batterySelect = '';
    this.addressForm = this.fb.group({
      Name: [null, Validators.required],
      Rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      age: ['', [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      date: ['', [Validators.required]],
    });
  }

  get Name() {
    return this.addressForm.get('Name')?.value.trim();
  }
  get Rut() {
    return this.addressForm.get('Rut')?.value.trim();
  }
  get Email() {
    return this.addressForm.get('Email')?.value.trim();
  }
  get date() {
    return this.addressForm.get('date')?.value.trim();
  }
  get age() {
    return this.addressForm.get('age')?.value.trim();
  }

  async ngOnInit() {
    await this.fetchBatteries();
  }

  onSubmit() {}

  public validateRut() {
    let rut = this.Rut;
    let result = rutTools.validate(rut);
    console.log(result, this.addressForm.valid);
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

  public async setOptionBattery(option: Battery) {
    this.batterySelect = option.name;
    console.log(this.batterySelect);
  }

  public postApp() {
    let { date, batterySelect } = this.addressForm.value;
    console.log(date, batterySelect);

    const info: Appointment = {
      name: this.Name,
      rut: this.Rut,
      email: this.Email,
      battery: this.batterySelect,
      date: this.date,
      age: this.age,
      isConfirmed: false,
    };
    try {
      //this.message2 = 'Se guardaron los datos.';
      this.appointmentProviderService.postAppointment(info).toPromise();
      console.log(info);
      this.notificationService.success('Se Envió correctamente el Formulario');
      window.location.reload();
    } catch (error) {
      this.notificationService.error('Error al Enviar el Formulario');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}

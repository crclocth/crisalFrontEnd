import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Battery } from 'src/app/core/models/battery.model';
import { Exam } from 'src/app/core/models/exam.modal';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-battery-screen',
  templateUrl: './create-battery-screen.component.html',
  styleUrls: ['./create-battery-screen.component.less'],
})
export class CreateBatteryScreenComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputDescription: number;
  public maxInputContent: number;
  public message: string;
  public message2: string;
  public batteryArray: Battery[];
  public examGeneralArray: Exam[] | null;
  public examLaboratorioArray: Exam[] | null;

  constructor(
    private fb: FormBuilder,
    private batteryProviderService: BatteryProviderService,
    private notificationService: NotificationService,
    private examProviderService: ExamProviderService
  ) {
    this.maxInputName = 120;
    this.maxInputDescription = 120;
    this.maxInputContent = 255;
    this.message2 = '';
    this.message = '';
    this.batteryArray = [];
    this.examGeneralArray = [];
    this.examLaboratorioArray = [];

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get description() {
    return this.addressForm.get('description')?.value;
  }

  onSubmit(): void {}

  async ngOnInit() {
    this.fetchBatteries();
    this.examGeneralArray = await this.fetchExams('General');
    this.examLaboratorioArray = await this.fetchExams('Laboratorio');
    console.log(this.examGeneralArray);
    console.log(this.examLaboratorioArray);
  }

  async fetchExams(type: string): Promise<Exam[] | null> {
    try {
      return await this.examProviderService.getExams(type).toPromise();
    } catch (error) {
      console.log('error');
      return null;
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

  notInArray(): boolean {
    for (let i = 0; i < this.batteryArray.length; i++) {
      console.log(i);
      if (this.name === this.batteryArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postBattery() {
    let { name, laboratory, type, unit } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.batteryProviderService
          .postBattery({
            name: this.name,
            description: this.description,
          })
          .toPromise();
        this.notificationService.success('Se Agregó correctamente la Batería');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar la Batería');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la Batería');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

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
  public arrayGeneral: string[];
  public arrayLaboratory: string[];

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
    this.arrayGeneral = [];
    this.arrayLaboratory = [];

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      description: ['', [Validators.required]],
      generalcheck: [''],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get description() {
    return this.addressForm.get('description')?.value;
  }
  get generalcheck() {
    return this.addressForm.get('generalcheck')?.value;
  }

  onSubmit(): void {}

  async ngOnInit() {
    this.fetchBatteries();
    this.examGeneralArray = await this.fetchExams('General');
    this.examLaboratorioArray = await this.fetchExams('Laboratorio');
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

  onChangeGeneral(option: Exam) {
    console.log(option);
    if (option._id) {
      let index = this.arrayGeneral.findIndex((id) => id === option._id);
      if (index > -1) {
        this.arrayGeneral.splice(index, 1);
      } else {
        let add = this.arrayGeneral.push(option._id);
      }
      //console.log(this.arrayGeneral);
    }
  }

  onChangeLabroatory(option: Exam) {
    console.log(option);
    if (option._id) {
      let index = this.arrayLaboratory.findIndex((id) => id === option._id);
      if (index > -1) {
        this.arrayLaboratory.splice(index, 1);
      } else {
        let add = this.arrayLaboratory.push(option._id);
      }
      console.log(this.arrayLaboratory);
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
    let { name, description } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.batteryProviderService
          .postBattery({
            name: this.name,
            description: this.description,
            generalExams: this.arrayGeneral,
            labExams: this.arrayLaboratory,
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

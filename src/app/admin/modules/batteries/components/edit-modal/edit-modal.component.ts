import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Battery } from 'src/app/core/models/battery.model';
import { Exam } from 'src/app/core/models/exam.modal';
import { BatteryProviderService } from 'src/app/core/providers/battery/battery-provider.service';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public battery: any;
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputDescription: number;
  public message: string;
  public message2: string;
  public batteryArray: Battery[];
  public examGeneralArray: Exam[] | null;
  public examLaboratorioArray: Exam[] | null;
  public arrayGeneral: string[];
  public arrayLaboratory: string[];
  public information!: Battery;
  public imagePath = '';
  public imgURL: any;

  constructor(
    private fb: FormBuilder,
    private batteryProviderService: BatteryProviderService,
    private notificationService: NotificationService,
    private examProviderService: ExamProviderService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.maxInputDescription = 400;
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
    console.log(this.battery);
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
      let index = this.battery.generalExams.findIndex(
        (id: any) => id === option._id
      );
      if (index > -1) {
        this.battery.generalExams.splice(index, 1);
      } else {
        let add = this.battery.generalExams.push(option._id);
      }
      console.log(this.battery.generalExams);
    }
  }

  onChangeLabroatory(option: Exam) {
    console.log(option);
    if (option._id) {
      let index = this.battery.labExams.findIndex(
        (id: any) => id === option._id
      );
      if (index > -1) {
        this.battery.labExams.splice(index, 1);
      } else {
        let add = this.battery.labExams.push(option._id);
      }
      console.log(this.battery.labExams);
    }
  }

  checkgeneral(option: any): boolean {
    let op = false;
    //console.log(this.battery.generalExams);
    this.battery.generalExams.forEach((element: any) => {
      if (element === option) {
        //   console.log(element);
        op = true;
      }
    });
    return op;
  }

  checkLab(option: any): boolean {
    let op = false;
    //console.log(this.battery.generalExams);
    this.battery.labExams.forEach((element: any) => {
      if (element === option) {
        //   console.log(element);
        op = true;
      }
    });
    return op;
  }

  notInArray(): boolean {
    for (let i = 0; i < this.batteryArray.length; i++) {
      console.log(i);
      if (
        this.name === this.batteryArray[i].name &&
        this.description === this.batteryArray[i].description
      ) {
        this.notificationService.error('Se repite el nombre de la Batería');
        return false;
      }
    }
    return true;
  }

  public async edit() {
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        this.information = {
          name: this.name,
          description: this.description,
          generalExams: this.battery.generalExams,
          labExams: this.battery.labExams,
          image: this.imgURL,
        };
        this.batteryProviderService.patchBattery(
          this.battery._id,
          this.information
        );
        this.notificationService.success('Se Editó la Batería');
        this.activeModal.close('info modal');
      } catch (error) {
        this.notificationService.error('Error al Editar la Batería');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la Batería');
    }
  }

  preview(files: any) {
    if (files.length === 0) return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    };
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

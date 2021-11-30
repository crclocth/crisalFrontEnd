import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exam } from 'src/app/core/models/exam.modal';
import { Laboratory } from 'src/app/core/models/laboratory.model';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-exam-screen',
  templateUrl: './create-exam-screen.component.html',
  styleUrls: ['./create-exam-screen.component.less'],
})
export class CreateExamScreenComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputContent: number;
  public message2: string;
  public examArray: Exam[] | null;
  public laboratoryArray: Laboratory[];
  public typeArray: string[];
  public selectedValue: string = '';
  public options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private fb: FormBuilder,
    private examProviderService: ExamProviderService,
    private notificationService: NotificationService,
    private laboratoryProviderService: LaboratoryProviderService
  ) {
    this.maxInputName = 120;
    this.maxInputContent = 255;
    this.examArray = [];
    this.laboratoryArray = [];
    this.typeArray = ['General', 'Laboratorio'];
    this.message2 = '';

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      laboratory: [''],
      type: [null, [Validators.required]],
      unit: [''],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value.trim();
  }
  get laboratory() {
    return this.addressForm.get('laboratory')?.value;
  }
  get type() {
    return this.addressForm.get('type')?.value;
  }
  get unit() {
    return this.addressForm.get('unit')?.value.trim();
  }

  onSubmit(): void {}

  async ngOnInit() {
    this.fetchLaboratory();
    this.examArray = await this.fetchExams('all');
  }

  async fetchExams(type: string): Promise<Exam[] | null> {
    try {
      return await this.examProviderService.getExams(type).toPromise();
    } catch (error) {
      console.log('error');
      return null;
    }
  }

  async fetchLaboratory() {
    try {
      this.laboratoryArray = await this.laboratoryProviderService
        .getLaboratorys()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    if (this.examArray) {
      for (let i = 0; i < this.examArray.length; i++) {
        console.log(i);
        if (
          this.name === this.examArray[i].name &&
          this.laboratory === this.examArray[i].laboratory
        ) {
          //this.notificationService.error('Se repite el nombre de la noticia');
          return false;
        }
      }
    }
    return true;
  }

  public async postExam() {
    let { name, laboratory, type, unit } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.examProviderService
          .postExam({
            name: this.name,
            laboratory: this.laboratory,
            type: this.type,
            measurementUnit: this.unit,
          })
          .toPromise();
        this.notificationService.success('Se Agregó correctamente el Exámen');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar el Exámen');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Exámen');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

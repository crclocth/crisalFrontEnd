import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Exam } from 'src/app/core/models/exam.modal';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-exam-screen',
  templateUrl: './create-exam-screen.component.html',
  styleUrls: ['./create-exam-screen.component.less'],
})
export class CreateExamScreenComponent implements OnInit {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInput: number;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputContent: number;
  public imagePath = '';
  public imgURL: any;
  public message: string;
  public message2: string;
  public examArray: Exam[];
  public options: string[] = ['One', 'Two', 'Three'];
  public filteredOptions!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private examProviderService: ExamProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.maxInputProfession = 45;
    this.maxInputContent = 255;
    this.hasUnitNumber = false;
    this.maxInput = 250;
    this.examArray = [];
    this.message2 = '';
    this.message = '';

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      laboratory: ['', [Validators.required]],
      type: [null, [Validators.required]],
      unit: [null, [Validators.required]],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get laboratory() {
    return this.addressForm.get('laboratory')?.value;
  }
  get type() {
    return this.addressForm.get('type')?.value;
  }
  get unit() {
    return this.addressForm.get('unit')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {
    this.fetchEmployees();
  }

  async fetchEmployees() {
    try {
      this.examArray = await this.examProviderService.getExams().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.examArray.length; i++) {
      console.log(i);
      if (this.name === this.examArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postUsuario() {
    let { name, laboratory, type, unit } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.examProviderService
          .postExam({
            name: this.name,
            laboratory: this.laboratory,
            type: this.type,
            unit: this.unit,
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

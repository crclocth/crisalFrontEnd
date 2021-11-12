import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exam } from 'src/app/core/models/exam.modal';
import { Laboratory } from 'src/app/core/models/laboratory.model';
import { ExamProviderService } from 'src/app/core/providers/exam/exam-provider.service';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputContent: number;
  public message: string;
  public message2: string;
  public exam: any;
  public information!: Exam;
  public laboratoryArray: Laboratory[];
  public typeArray: string[];
  public exaname: string;

  constructor(
    private fb: FormBuilder,
    private examProviderService: ExamProviderService,
    private notificationService: NotificationService,
    public laboratoryProviderService: LaboratoryProviderService,
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      exam: Exam;
    }
  ) {
    this.maxInputName = 120;
    this.maxInputContent = 120;
    this.message = '';
    this.message2 = '';
    this.exam = data.exam;
    this.exaname = this.exam.name;
    this.laboratoryArray = [];
    this.typeArray = ['General', 'Laboratorio'];
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      laboratory: [''],
      type: [null, [Validators.required]],
      unit: [''],
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

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.exam);
    this.fetchLaboratory();
  }

  /* notInArray(): boolean {
    for (let i = 0; i < this.clientArray.length; i++) {
      console.log(i);
      if (this.title === this.clientArray[i].title) {
        this.notificationService.error('Se repite el nombre del cliente');
        return false;
      }
    }
    return true;
  } */

  async fetchLaboratory() {
    try {
      this.laboratoryArray = await this.laboratoryProviderService
        .getLaboratorys()
        .toPromise();
      console.log(this.laboratoryArray);
    } catch (error) {
      console.log('error');
    }
  }

  public async edit() {
    try {
      this.message2 = 'Se guardaron los datos.';
      this.information = {
        name: this.name,
        laboratory: this.laboratory,
        type: this.type,
        measurementUnit: this.unit,
      };
      this.examProviderService.patchExam(this.exam._id, this.information);
      this.notificationService.success('Se Editó el Cliente');
      this.dialogRef.close('info modal');
      window.location.reload();
    } catch (error) {
      this.notificationService.error('Error al Editar el Cliente');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

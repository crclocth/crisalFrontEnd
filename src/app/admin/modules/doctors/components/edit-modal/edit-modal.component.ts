import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorProviderService } from 'src/app/core/providers/doctor/doctor-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputTitle: number;
  public message2: string;
  public message: string;
  public imagePath = '';
  public imgURL: any;
  public doctorArray: Doctor[];
  public doctor: any;
  public information!: Doctor;

  constructor(
    private fb: FormBuilder,
    private doctorProviderService: DoctorProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 60;
    this.maxInputTitle = 60;
    this.message2 = '';
    this.message = '';
    this.doctorArray = [];
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
      name: ['', [Validators.required]],
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }
  get name() {
    return this.addressForm.get('name')?.value;
  }
  get rut() {
    return this.addressForm.get('rut')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.doctor);
  }

  /* notInArray(): boolean {
    for (let i = 0; i < this.newsArray.length; i++) {
      console.log(i);
      if (this.title === this.newsArray[i].title) {
        console.log('mismo nombre');
        return false;
      }
    }
    return true;
  } */

  public async edit() {
    let { title, name, rut, image } = this.addressForm.value;
    try {
      this.message = 'Se guardaron los datos.';
      this.information = {
        title: this.title,
        name: this.name,
        rut: this.rut,
        image: this.imgURL,
      };
      this.doctorProviderService.patchDoctor(this.doctor._id, this.information);
      this.notificationService.success('Se Editó el Doctor');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Editar el Doctor');
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

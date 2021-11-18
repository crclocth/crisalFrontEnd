import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorProviderService } from 'src/app/core/providers/doctor/doctor-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-add-doctor-screen',
  templateUrl: './add-doctor-screen.component.html',
  styleUrls: ['./add-doctor-screen.component.less'],
})
export class AddDoctorScreenComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputTitle: number;
  public message2: string;
  public message: string;
  public imagePath = '';
  public imgURL: any;
  public doctorArray: Doctor[];

  constructor(
    private fb: FormBuilder,
    private doctorProviderService: DoctorProviderService,
    private notificationService: NotificationService
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

  ngOnInit() {
    this.fetchdoctors();
  }

  async fetchdoctors() {
    try {
      this.doctorArray = await this.doctorProviderService
        .getDoctors()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.doctorArray.length; i++) {
      console.log(i);
      if (this.title === this.doctorArray[i].title) {
        this.notificationService.error('Se repite el nombre del Doctor');
        return false;
      }
    }
    return true;
  }

  public async postDoctor() {
    let { title, lead, content, date } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.doctorProviderService
          .postDoctor({
            title: this.title,
            name: this.name,
            rut: this.rut,
            image: this.imgURL,
          })
          .toPromise();
        this.notificationService.success('Se Creó correctamente el Doctor');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Crear el Doctor');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Doctor');
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

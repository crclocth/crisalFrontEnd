import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-add-certification-screen',
  templateUrl: './add-certification-screen.component.html',
  styleUrls: ['./add-certification-screen.component.less'],
})
export class AddCertificationScreenComponent {
  public addressForm: FormGroup;
  public maxInputName: number;
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;
  public certificationArray: Certification[];

  constructor(
    private fb: FormBuilder,
    private certificationProviderService: CertificationProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.message = '';
    this.message2 = '';
    this.certificationArray = [];
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {
    this.fetchCertifications();
  }

  async fetchCertifications() {
    try {
      this.certificationArray = await this.certificationProviderService
        .getCertifications()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.certificationArray.length; i++) {
      console.log(i);
      if (this.title === this.certificationArray[i].title) {
        this.notificationService.error(
          'Se repite el nombre de la Certificación'
        );
        return false;
      }
    }
    return true;
  }

  public async postCertification() {
    let { name } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.certificationProviderService
          .postCertification({
            title: this.title,
            image: this.imgURL,
          })
          .toPromise();
        this.notificationService.success(
          'Se Agregó correctamente la Certificación'
        );
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Añadir la Certificación');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la Certificación');
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

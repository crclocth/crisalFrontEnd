import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationProviderService } from 'src/app/core/providers/certification/certification-provider.service';

@Component({
  selector: 'app-add-certification-screen',
  templateUrl: './add-certification-screen.component.html',
  styleUrls: ['./add-certification-screen.component.less'],
})
export class AddCertificationScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;

  constructor(
    private fb: FormBuilder,
    private certificationProviderService: CertificationProviderService
  ) {
    this.maxInputName = 120;
    this.message = '';
    this.message2 = '';
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });

    this.hasUnitNumber = false;
  }

  get title() {
    return this.addressForm.get('title')?.value;
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

  public async postCertification() {
    let { name } = this.addressForm.value;
    console.log(name);
    try {
      this.message2 = 'Se guardaron los datos.';
      await this.certificationProviderService
        .postCertification({
          title: this.title,
          image: this.imgURL,
        })
        .toPromise();
    } catch (error) {
      alert('Error al añadir el registro');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}

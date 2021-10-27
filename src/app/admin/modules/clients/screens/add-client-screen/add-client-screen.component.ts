import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';

@Component({
  selector: 'app-add-client-screen',
  templateUrl: './add-client-screen.component.html',
  styleUrls: ['./add-client-screen.component.less'],
})
export class AddClientScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;

  constructor(
    private fb: FormBuilder,
    private clientProviderService: ClientProviderService
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

  public async postClient() {
    let { title } = this.addressForm.value;
    console.log(name);
    try {
      this.message2 = 'Se guardaron los datos.';
      await this.clientProviderService
        .postClient({
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

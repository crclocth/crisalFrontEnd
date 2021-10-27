import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';

@Component({
  selector: 'app-add-employee-screen',
  templateUrl: './add-employee-screen.component.html',
  styleUrls: ['./add-employee-screen.component.less'],
})
export class AddEmployeeScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInput: number;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputContent: number;
  public imagePath = '';
  imgURL: any;
  public message: string = '';
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeProviderService: EmployeeProviderService
  ) {
    this.maxInputName = 120;
    this.maxInputProfession = 45;
    this.maxInputContent = 255;
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      profession: ['', [Validators.required]],
      description: [null, [Validators.required]],
    });
    this.hasUnitNumber = false;
    this.maxInput = 250;
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get profession() {
    return this.addressForm.get('profession')?.value;
  }
  get description() {
    return this.addressForm.get('description')?.value;
  }

  public async postUsuario() {
    let { name, description, profession } = this.addressForm.value;
    console.log(name, description, profession);
    try {
      this.mensaje = 'Se guardaron los datos.';
      await this.employeeProviderService
        .postEmployee({
          name: this.name,
          profession: this.profession,
          image: this.imgURL,
          description: this.description,
        })
        .toPromise();
    } catch (error) {
      alert('Error al añadir el registro');
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

  onSubmit(): void {
    alert('Thanks!');
  }
}

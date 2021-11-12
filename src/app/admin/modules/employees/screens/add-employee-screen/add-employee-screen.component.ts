import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-add-employee-screen',
  templateUrl: './add-employee-screen.component.html',
  styleUrls: ['./add-employee-screen.component.less'],
})
export class AddEmployeeScreenComponent {
  public addressForm: FormGroup;
  public maxInput: number;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputContent: number;
  public imagePath = '';
  public imgURL: any;
  public message: string;
  public message2: string;
  public employeeArray: Employee[];

  constructor(
    private fb: FormBuilder,
    private employeeProviderService: EmployeeProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.maxInputProfession = 45;
    this.maxInputContent = 255;
    this.maxInput = 250;
    this.employeeArray = [];
    this.message2 = '';
    this.message = '';

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      profession: ['', [Validators.required]],
      description: [null, [Validators.required]],
    });
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

  onSubmit(): void {}

  ngOnInit() {
    this.fetchEmployees();
  }

  async fetchEmployees() {
    try {
      this.employeeArray = await this.employeeProviderService
        .getEmployees()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.employeeArray.length; i++) {
      console.log(i);
      if (this.name === this.employeeArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postUsuario() {
    let { name, description, profession } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.employeeProviderService
          .postEmployee({
            name: this.name,
            profession: this.profession,
            image: this.imgURL,
            description: this.description,
          })
          .toPromise();
        this.notificationService.success('Se Agregó correctamente el Empleado');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar al Empleado');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Empleado');
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

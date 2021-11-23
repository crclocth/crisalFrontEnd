import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeProviderService } from 'src/app/core/providers/employee/employee-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputProfession: number;
  public maxInputabreprofession: number;
  public maxInputContent: number;
  public imagePath = '';
  public imgURL: any;
  public message: string;
  public message2: string;
  public employee: any;
  public information!: Employee;

  constructor(
    private fb: FormBuilder,
    private employeeProviderService: EmployeeProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.maxInputabreprofession = 10;
    this.maxInputProfession = 80;
    this.maxInputContent = 500;
    this.message2 = '';
    this.message = '';
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      profession: ['', [Validators.required]],
      abreprofession: ['', [Validators.required]],
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
  get abreprofession() {
    return this.addressForm.get('abreprofession')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.employee);
  }

  public async edit() {
    let { name, description, profession } = this.addressForm.value;
    try {
      this.message2 = 'Se guardaron los datos.';
      this.information = {
        name: this.name,
        profession: this.profession,
        image: this.imgURL,
        description: this.description,
        abreprofession: this.abreprofession,
      };
      this.employeeProviderService.patchEmployee(
        this.employee._id,
        this.information
      );
      this.notificationService.success('Se editó el Empleado');
      this.activeModal.close('info modal');
      window.location.reload();
    } catch (error) {
      this.notificationService.error('Error al Editar el Empleado');
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

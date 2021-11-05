import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/core/models/company.modal';
import { CompanyProviderService } from 'src/app/core/providers/company/company-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-add-company-screen',
  templateUrl: './add-company-screen.component.html',
  styleUrls: ['./add-company-screen.component.less'],
})
export class AddCompanyScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputTask: number;
  public message2: string;
  public companyArray: Company[];

  constructor(
    private fb: FormBuilder,
    private companyProviderService: CompanyProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.maxInputTask = 120;
    this.message2 = '';
    this.hasUnitNumber = false;
    this.companyArray = [];
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      rut: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9Kk]{1}'),
        ],
      ],
      task: [null, [Validators.required]],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get rut() {
    return this.addressForm.get('rut')?.value;
  }
  get task() {
    return this.addressForm.get('task')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {
    this.fetchCompanies();
  }

  async fetchCompanies() {
    try {
      this.companyArray = await this.companyProviderService
        .getCompanies()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.companyArray.length; i++) {
      console.log(i);
      if (this.name === this.companyArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postCompany() {
    let { name, rut, task, mail } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.companyProviderService
          .postCompany({
            name: this.name,
            rut: this.rut,
            task: this.task,
            mail: this.mail,
          })
          .toPromise();
        this.notificationService.success('Se Agregó correctamente la Empresa');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar la Empresa');
      }
    } else {
      this.notificationService.error('Se repite el nombre de la Empresa');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

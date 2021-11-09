import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'src/app/core/models/company.modal';
import { CompanyProviderService } from 'src/app/core/providers/company/company-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputTask: number;
  public message2: string;
  public companyArray: Company[];
  public company: any;
  public information!: Company;

  constructor(
    private fb: FormBuilder,
    private companyProviderService: CompanyProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
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
      faena: [null, [Validators.required]],
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
  get faena() {
    return this.addressForm.get('faena')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.company);
  }

  /* notInArray(): boolean {
    for (let i = 0; i < this.companyArray.length; i++) {
      console.log(i);
      if (this.name === this.companyArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  } */

  public async edit() {
    let { name, rut, task, mail } = this.addressForm.value;
    try {
      this.message2 = 'Se guardaron los datos.';
      this.information = {
        name: this.name,
        rut: this.rut,
        faena: this.faena,
        mail: this.mail,
      };
      this.companyProviderService.patchCompany(
        this.company._id,
        this.information
      );
      this.notificationService.success('Se Editó la Empresa');
      this.activeModal.close('info modal');
    } catch (error) {
      this.notificationService.error('Error al Editar la Empresa');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

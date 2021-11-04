import { Component, HostListener, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Information } from 'src/app/core/models/information.model';
import { InformationProviderService } from 'src/app/core/providers/information/information-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-information-screen',
  templateUrl: './edit-information-screen.component.html',
  styleUrls: ['./edit-information-screen.component.less'],
})
export class EditInformationScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;
  public maxInputTelephone1: number;
  public maxInputTelephone2: number;
  public maxInputAddress: number;
  public maxInputMail: number;
  public maxInputAboutUs: number;
  public maxInputVision: number;
  public maxInputMission: number;
  public maxInputValues: number;
  public informations$: Observable<Information[]>;
  public informationArray: Information[];
  public information!: Information;
  public message: string;
  public id: string;

  constructor(
    private fb: FormBuilder,
    private informationProviderService: InformationProviderService,
    private notificationService: NotificationService
  ) {
    this.informations$ = new Observable<Information[]>();
    this.informationArray = [];
    this.id = '617345a9e2eab63a50629db3';
    this.maxInputTelephone1 = 10;
    this.maxInputTelephone2 = 10;
    this.maxInputAddress = 60;
    this.maxInputMail = 320;
    this.maxInputAboutUs = 500;
    this.maxInputVision = 500;
    this.maxInputMission = 500;
    this.maxInputValues = 500;
    this.message = '';
    this.addressForm = this.fb.group({
      telephone1: [null, [Validators.required]],
      telephone2: [null, [Validators.required]],
      address: ['', [Validators.required]],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      aboutUs: [null, [Validators.required]],
      vision: [null, [Validators.required]],
      mission: [null, [Validators.required]],
      values: [null, [Validators.required]],
    });
    this.hasUnitNumber = false;
  }

  get telephone1() {
    return this.addressForm.get('telephone1')?.value;
  }
  get telephone2() {
    return this.addressForm.get('telephone2')?.value;
  }
  get address() {
    return this.addressForm.get('address')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }
  get aboutUs() {
    return this.addressForm.get('aboutUs')?.value;
  }
  get vision() {
    return this.addressForm.get('vision')?.value;
  }
  get mission() {
    return this.addressForm.get('mission')?.value;
  }
  get values() {
    return this.addressForm.get('values')?.value;
  }

  onSubmit(): void {
    this.notificationService.success(
      'Se modificó correctamente la información'
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchInformations();
    console.log('se cambio');
  }

  async ngOnInit() {
    this.fetchInformations();
  }

  async fetchInformations() {
    try {
      this.informationArray = await this.informationProviderService
        .getInformations()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  public async pactchInformation() {
    let {
      telephone1,
      telephone2,
      address,
      mail,
      aboutUs,
      vision,
      mission,
      values,
    } = this.addressForm.value;
    console.log(
      telephone1,
      telephone2,
      address,
      mail,
      aboutUs,
      vision,
      mission,
      values
    );
    try {
      this.message = 'Se guardaron los datos.';
      this.information = {
        telephone1: this.telephone1,
        telephone2: this.telephone2,
        address: this.address,
        mail: this.mail,
        aboutUs: this.aboutUs,
        vision: this.vision,
        mission: this.mission,
        values: this.values,
      };
      await this.informationProviderService.patchInformation(
        this.id,
        this.information
      );
      this.notificationService.success('Se Editó la Información');
    } catch (error) {
      this.notificationService.success('Error al Editar la Información');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

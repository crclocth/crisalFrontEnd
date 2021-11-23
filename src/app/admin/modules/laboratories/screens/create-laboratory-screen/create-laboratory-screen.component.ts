import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboratory } from 'src/app/core/models/laboratory.model';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-laboratory-screen',
  templateUrl: './create-laboratory-screen.component.html',
  styleUrls: ['./create-laboratory-screen.component.less'],
})
export class CreateLaboratoryScreenComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public message2: string;
  public laboratoryArray: Laboratory[];

  constructor(
    private fb: FormBuilder,
    private laboratoryProviderService: LaboratoryProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.laboratoryArray = [];
    this.message2 = '';

    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value.trim();
  }

  onSubmit(): void {}

  ngOnInit() {
    this.fetchLaboratoy();
  }

  async fetchLaboratoy() {
    try {
      this.laboratoryArray = await this.laboratoryProviderService
        .getLaboratorys()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.laboratoryArray.length; i++) {
      console.log(i);
      if (this.name === this.laboratoryArray[i].name) {
        //this.notificationService.error('Se repite el nombre de la noticia');
        return false;
      }
    }
    return true;
  }

  public async postLaboratory() {
    let { name, laboratory, type, unit } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.laboratoryProviderService
          .postLaboratory({
            name: this.name,
          })
          .toPromise();
        this.notificationService.success(
          'Se Agregó correctamente el Laboratorio'
        );
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Agregar el Laboratorio');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Laboratorio');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

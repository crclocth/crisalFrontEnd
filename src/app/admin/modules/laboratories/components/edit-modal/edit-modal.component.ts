import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Laboratory } from 'src/app/core/models/laboratory.model';
import { LaboratoryProviderService } from 'src/app/core/providers/laboratory/laboratory-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public message2: string;
  public laboratoryArray: Laboratory[];
  public laboratory: any;
  public information!: Laboratory;

  constructor(
    private fb: FormBuilder,
    private laboratoryProviderService: LaboratoryProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.message2 = '';
    this.laboratoryArray = [];
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  get name() {
    return this.addressForm.get('name')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.laboratory);
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

  public async edit() {
    let { name } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        this.information = {
          name: this.name,
        };
        this.laboratoryProviderService.patchLaboratory(
          this.laboratory._id,
          this.information
        );
        this.notificationService.success('Se Editó el Laboratorio');
        this.activeModal.close('info modal');
      } catch (error) {
        this.notificationService.error('Error al Editar el Laboratorio');
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

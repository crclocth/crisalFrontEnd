import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client.model';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';
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
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;
  public client: any;
  public information!: Client;

  constructor(
    private fb: FormBuilder,
    private clientProviderService: ClientProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.message = '';
    this.message2 = '';
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.client);
  }

  /* notInArray(): boolean {
    for (let i = 0; i < this.clientArray.length; i++) {
      console.log(i);
      if (this.title === this.clientArray[i].title) {
        this.notificationService.error('Se repite el nombre del cliente');
        return false;
      }
    }
    return true;
  } */

  public async edit() {
    let { title } = this.addressForm.value;
    try {
      this.message2 = 'Se guardaron los datos.';
      this.information = {
        title: this.title,
        image: this.imgURL,
      };
      this.clientProviderService.patchClient(this.client._id, this.information);
      this.notificationService.success('Se Editó el Cliente');
      this.activeModal.close('info modal');
      window.location.reload();
    } catch (error) {
      this.notificationService.error('Error al Editar el Cliente');
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

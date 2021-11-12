import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client.model';
import { ClientProviderService } from 'src/app/core/providers/client/client-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-add-client-screen',
  templateUrl: './add-client-screen.component.html',
  styleUrls: ['./add-client-screen.component.less'],
})
export class AddClientScreenComponent {
  public addressForm: FormGroup;
  public maxInputName: number;
  public imagePath: any;
  public imgURL: any;
  public message: string;
  public message2: string;
  public clientArray: Client[];

  constructor(
    private fb: FormBuilder,
    private clientProviderService: ClientProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.message = '';
    this.message2 = '';
    this.clientArray = [];
    this.addressForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  get title() {
    return this.addressForm.get('title')?.value;
  }

  onSubmit(): void {}

  ngOnInit() {
    this.fetchClients();
  }

  async fetchClients() {
    try {
      this.clientArray = await this.clientProviderService
        .getClients()
        .toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.clientArray.length; i++) {
      console.log(i);
      if (this.title === this.clientArray[i].title) {
        this.notificationService.error('Se repite el nombre del Cliente');
        return false;
      }
    }
    return true;
  }

  public async postClient() {
    let { title } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.clientProviderService
          .postClient({
            title: this.title,
            image: this.imgURL,
          })
          .toPromise();
        this.notificationService.success('Se Agregó correctamente el Cliente');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Añadir al Cliente');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Cliente');
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

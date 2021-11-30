import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-create-user-screen',
  templateUrl: './create-user-screen.component.html',
  styleUrls: ['./create-user-screen.component.less'],
})
export class CreateUserScreenComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputPassword: number;
  public selected!: Date | null;
  public message2: string;
  public userArray: User[];

  constructor(
    private fb: FormBuilder,
    private userProviderService: UserProviderService,
    private notificationService: NotificationService
  ) {
    this.maxInputName = 120;
    this.maxInputPassword = 60;
    this.message2 = '';
    this.userArray = [];
    this.addressForm = this.fb.group({
      name: [null, [Validators.required]],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }

  /* get name() {
    return this.addressForm.get('name')?.value.trim();
  } */
  get mail() {
    return this.addressForm.get('mail')?.value.trim();
  }
  get password() {
    return this.addressForm.get('password')?.value.trim();
  }

  ngOnInit() {
    this.fetchusers();
  }

  async fetchusers() {
    try {
      this.userArray = await this.userProviderService.getUsers().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  notInArray(): boolean {
    for (let i = 0; i < this.userArray.length; i++) {
      console.log(i);
      if (this.mail === this.userArray[i].mail) {
        this.notificationService.error('Se repite el nombre del Usuario');
        return false;
      }
    }
    return true;
  }

  public async postNew() {
    let { title, lead, content, date } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message2 = 'Se guardaron los datos.';
        await this.userProviderService
          .postUser({
            //name: this.name,
            mail: this.mail,
            password: this.password,
            //role: 'user',
          })
          .toPromise();
        this.notificationService.success('Se Creó correctamente el Usuario');
        window.location.reload();
      } catch (error) {
        this.notificationService.error('Error al Crear el Usuario');
      }
    } else {
      this.notificationService.error('Se repite el nombre del Usuario');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

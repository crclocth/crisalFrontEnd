import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
})
export class EditModalComponent implements OnInit {
  public addressForm: FormGroup;
  public maxInputName: number;
  public maxInputPassword: number;
  public selected!: Date | null;
  public message: string;
  public imagePath = '';
  public imgURL: any;
  public userArray: User[];
  public user: any;
  public information!: User;

  constructor(
    private fb: FormBuilder,
    private userProviderService: UserProviderService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal
  ) {
    this.maxInputName = 120;
    this.maxInputPassword = 60;
    this.message = '';
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

  get name() {
    return this.addressForm.get('name')?.value;
  }
  get mail() {
    return this.addressForm.get('mail')?.value;
  }
  get password() {
    return this.addressForm.get('password')?.value;
  }

  onSubmit(): void {
    this.addressForm.reset();
  }

  ngOnInit() {
    console.log(this.user);
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

  public async edit() {
    let { title, lead, content, date } = this.addressForm.value;
    if (this.notInArray() === true) {
      try {
        this.message = 'Se guardaron los datos.';
        this.information = {
          name: this.name,
          mail: this.mail,
          password: this.password,
        };
        this.userProviderService.patchUser(this.user._id, this.information);
        this.notificationService.success('Se Editó el Usuario');
        this.activeModal.close('info modal');
      } catch (error) {
        this.notificationService.error('Error al Editar el Usuario');
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

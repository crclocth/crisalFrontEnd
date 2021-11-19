import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/core/providers/auth/auth-provider.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less'],
})
export class LoginScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authProviderService: AuthProviderService,
    private notificationService: NotificationService
  ) {
    this.addressForm = this.fb.group({
      user: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
    this.hasUnitNumber = false;
  }

  get user() {
    return this.addressForm.get('user')?.value;
  }
  get password() {
    return this.addressForm.get('password')?.value;
  }

  public async goToHistoryScreen() {
    try {
      const result = await this.authProviderService
        .login(this.user, this.password)
        .toPromise();
      if (result?.access_token) {
        this.notificationService.success('Se Inició Sesión Correctamente');
      }
    } catch (error) {
      console.log(error);
      this.notificationService.error('Sesión Invalida');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {}
}

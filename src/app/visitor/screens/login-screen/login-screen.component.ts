import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less'],
})
export class LoginScreenComponent {
  public hasUnitNumber: boolean;
  public addressForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
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

  public goToHistoryScreen(): void {
    this.router.navigate(['/admin']);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

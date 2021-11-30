import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderService } from 'src/app/core/providers/auth/auth-provider.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
})
export class AccordionComponent implements OnInit {
  constructor(
    private route: Router,
    private authProviderService: AuthProviderService
  ) {}

  ngOnInit(): void {}

  goTo(Route: string) {
    this.route.navigate([`admin/${Route}`]);
  }

  public logout() {
    this.authProviderService.logout();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

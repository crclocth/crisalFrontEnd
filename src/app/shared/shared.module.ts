import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificateComponent } from './components/certificate/certificate.component';

const components = [
  NavBarComponent,
  HeaderComponent,
  FooterComponent,
  CertificateComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}

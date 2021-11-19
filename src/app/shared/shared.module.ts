import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CoreModule } from '../core/core.module';
import { SlicePipe } from './pipes/slice/slice.pipe';

const components = [
  NavBarComponent,
  HeaderComponent,
  FooterComponent,
  CertificateComponent,
  SlicePipe,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CoreModule],
  exports: [...components],
})
export class SharedModule {}

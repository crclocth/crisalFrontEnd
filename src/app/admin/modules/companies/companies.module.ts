import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyScreenComponent } from './screens/company-screen/company-screen.component';


@NgModule({
  declarations: [
    CompanyScreenComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }

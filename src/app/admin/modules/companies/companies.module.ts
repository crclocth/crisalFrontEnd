import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyScreenComponent } from './screens/company-screen/company-screen.component';
import { AddCompanyScreenComponent } from './screens/add-company-screen/add-company-screen.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCompanyScreenComponent } from './screens/list-company-screen/list-company-screen.component';
import { CompanyComponent } from './components/company/company.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';

const components = [
  CompanyScreenComponent,
  AddCompanyScreenComponent,
  ListCompanyScreenComponent,
  CompanyComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CompaniesRoutingModule, MaterialModule, SharedModule],
})
export class CompaniesModule {}

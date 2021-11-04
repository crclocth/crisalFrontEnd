import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientScreenComponent } from './screens/client-screen/client-screen.component';
import { AddClientScreenComponent } from './screens/add-client-screen/add-client-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListClientScreenComponent } from './screens/list-client-screen/list-client-screen.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

const components = [
  ClientScreenComponent,
  AddClientScreenComponent,
  ListClientScreenComponent,
  ClientsComponent,
  DeleteModalComponent,
  SeeModalComponent,
  EditModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialModule,
    SharedModule,
  ],
})
export class ClientsModule {}

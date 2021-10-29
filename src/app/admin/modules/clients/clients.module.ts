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


@NgModule({
  declarations: [
    ClientScreenComponent,
    AddClientScreenComponent,
    ListClientScreenComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }

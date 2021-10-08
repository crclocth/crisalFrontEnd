import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './screens/login/login.component';
import { AdminComponent } from './admin.component';
import { HistoryScreenComponent } from './screens/history-screen/history-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AccordionComponent } from './components/accordion/accordion.component';

const components = [
  LoginComponent,
  AdminComponent,
  HistoryScreenComponent,
  HomeScreenComponent,
  AccordionComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class AdminModule {}

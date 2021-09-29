import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './screens/login/login.component';
import { AdminComponent } from './admin.component';
import { HistoryScreenComponent } from './screens/history-screen/history-screen.component';

const components = [LoginComponent, AdminComponent];

@NgModule({
  declarations: [...components, HistoryScreenComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}

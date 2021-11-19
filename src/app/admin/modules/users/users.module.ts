import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserScreenComponent } from './screens/user-screen/user-screen.component';
import { CreateUserScreenComponent } from './screens/create-user-screen/create-user-screen.component';
import { ListUserScreenComponent } from './screens/list-user-screen/list-user-screen.component';
import { UserComponent } from './components/user/user.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  UserScreenComponent,
  CreateUserScreenComponent,
  ListUserScreenComponent,
  UserComponent,
  SeeModalComponent,
  DeleteModalComponent,
  EditModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, SharedModule],
})
export class UsersModule {}

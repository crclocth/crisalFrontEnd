import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewScreenComponent } from './screens/new-screen/new-screen.component';
import { CreateNewScreenComponent } from './screens/create-new-screen/create-new-screen.component';
import { ListNewScreenComponent } from './screens/list-new-screen/list-new-screen.component';
import { NewsComponent } from './components/news/news.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { SeeModalComponent } from './components/see-modal/see-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  NewScreenComponent,
  CreateNewScreenComponent,
  ListNewScreenComponent,
  NewsComponent,
  DeleteModalComponent,
  EditModalComponent,
  SeeModalComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NewsRoutingModule, MaterialModule, SharedModule],
})
export class NewsModule {}

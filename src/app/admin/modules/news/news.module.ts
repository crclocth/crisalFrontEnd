import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewScreenComponent } from './screens/new-screen/new-screen.component';
import { CreateNewScreenComponent } from './screens/create-new-screen/create-new-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListNewScreenComponent } from './screens/list-new-screen/list-new-screen.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [NewScreenComponent, CreateNewScreenComponent, ListNewScreenComponent, NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
})
export class NewsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';

const Services = [HttpService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...Services],
})
export class CoreModule {}

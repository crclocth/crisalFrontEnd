import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VisitorModule } from './visitor/visitor.module';
import { AdminModule } from './admin/admin.module';
import { SwiperModule } from 'swiper/angular';

const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisitorModule,
    SharedModule,
    GoogleMapsModule,
    AdminModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [...components],
})
export class AppModule {}

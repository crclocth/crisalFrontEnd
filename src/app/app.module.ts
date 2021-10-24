import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VisitorModule } from './visitor/visitor.module';
import { AdminModule } from './admin/admin.module';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VisitorModule,
    SharedModule,
    GoogleMapsModule,
    AdminModule,
    SwiperModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [...components],
})
export class AppModule {}

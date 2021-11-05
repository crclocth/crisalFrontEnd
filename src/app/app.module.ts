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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { InterceptorsInterceptor } from './core/interceptors/interceptors.interceptor';

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
    NgbPaginationModule,
    NgbAlertModule,
    ToastrModule.forRoot({
      progressBar: false,
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [...components],
})
export class AppModule {}

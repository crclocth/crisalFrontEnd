import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VisitorModule } from './visitor/visitor.module';

const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [BrowserModule, AppRoutingModule, VisitorModule, SharedModule],
  providers: [],
  bootstrap: [...components],
})
export class AppModule {}

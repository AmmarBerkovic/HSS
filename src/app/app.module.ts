import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignButtonComponent } from './sign-button/sign-button.component';
import { EmailfieldsComponent } from './emailfields/emailfields.component';

@NgModule({
  declarations: [
    AppComponent,
    SignButtonComponent,
    EmailfieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

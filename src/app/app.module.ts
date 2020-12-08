import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FnameLnameComponent } from './fname-lname/fname-lname.component';
import { EmailfieldsComponent } from './emailfields/emailfields.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormboxComponent } from './formbox/formbox.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    FnameLnameComponent,
    EmailfieldsComponent,
    ButtonsComponent,
    FormboxComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

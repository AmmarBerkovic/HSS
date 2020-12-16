import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputfieldsComponent } from './input-fields/input-fields.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormboxComponent } from './formbox/formbox.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    InputfieldsComponent,
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

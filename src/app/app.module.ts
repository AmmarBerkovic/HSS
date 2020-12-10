import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { ButtonComponent } from './button/button.component';
import { FormFpasswordComponent } from './form-fpassword/form-fpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldsComponent,
    ButtonComponent,
    FormFpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

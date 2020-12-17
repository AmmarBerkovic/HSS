import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeTitleComponent } from './welcome-title/welcome-title.component';
import { DescriptionComponent } from './description/description.component';
import { InputfieldsComponent } from './input-fields/input-fields.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormboxComponent } from './formbox/formbox.component';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeTitleComponent,
    DescriptionComponent,
    FormboxComponent,
    InputfieldsComponent,
    ButtonsComponent,
    FormboxComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

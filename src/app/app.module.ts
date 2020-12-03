import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeTitleComponent } from './welcome-title/welcome-title.component';
import { DescriptionComponent } from './description/description.component';
import { PageButtonComponent } from './page-button/page-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeTitleComponent,
    DescriptionComponent,
    PageButtonComponent,
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

// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';

//routes
import { appRoutes } from './routes';
import { FormNewPasswordComponent } from './form-new-password/form-new-password.component';

//other


@NgModule({
  declarations: [
    AppComponent,
    FormNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

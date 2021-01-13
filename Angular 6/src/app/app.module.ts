// built-in
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormEnterCodeComponent } from './user/form-enter-code/form-enter-code.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { from } from 'rxjs';
import { FormEnterEmailComponent } from './user/form-enter-email/form-enter-email.component';
import { FormNewPasswordComponent } from './user/form-new-password/form-new-password.component';
import { DescriptionComponent } from './description/description.component';
import { WelcomeTitleComponent } from './welcome-title/welcome-title.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { VideosFormComponent } from './videos-form/videos-form.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { MaterialsComponent } from './materials/materials.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    FormEnterEmailComponent,
    FormEnterCodeComponent,
    FormNewPasswordComponent,
    WelcomeTitleComponent,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    MaterialsComponent,
    BooksFormComponent,
    VideosFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule, // importing the sorting package here
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  UserService,
  { provide: Window, useValue: window }
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

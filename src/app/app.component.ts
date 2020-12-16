import { Component } from '@angular/core';
import { webpage } from 'src/webpage-data';
import { Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] })

export class AppComponent{
      title = webpage.title;
      description = webpage.description;
      logoUrl = webpage.logoUrl;

      @Input()
      src!: String;

      constructor( private router:Router ) { }

      isHomeRoute(){
        return this.router.url === '/'; 
      }

      isRegistrationForm(){
        return this.router.url === '/registration-form';
      }

      isLoginForm(){
        return this.router.url === '/login-form';
      }

      isForgotPassword(){
        return this.router.url === '/forgot-password'; 
      }

      onForgotPasswClicked(){
        this.router.navigateByUrl('/forgot-password');
      }

      onSignUpClicked(){
        this.router.navigateByUrl('/registration-form');
      }

      onSignInClicked(){
        this.router.navigateByUrl('/login-form');
      }
}

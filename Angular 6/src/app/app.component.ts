import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { webpage } from 'src/webpage-data';
import { Input } from '@angular/core';
declare const toggle:any;
declare const toggle1:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = webpage.title;
  description = webpage.description;
  logoUrl = webpage.logoUrl;

  @Input()
  src!: String;

  constructor( private router:Router ) { }

  isRegistrationForm(){
    return this.router.url === '/registration-form';
  }

  onForgotPasswClicked(){
    this.router.navigateByUrl('/forgot-password');
  }

  onSignUpClicked(){
    this.router.navigateByUrl('/registration-form');
  }

  onSignInClicked(){
    this.router.navigateByUrl('/login');
  }

  onClick(){
    toggle();
  }


  isHomeRoute(){
    return this.router.url === '/';
  }

  isForgotPassword(){
    return this.router.url === '/forgot-password';
  }
 
  isEnterCode(){
    return this.router.url === '/enter-code';
  }

  isNewPassword(){
    return this.router.url === '/new-password';
  }

  isLoginForm(){
    return (this.router.url === '/login' || this.router.url === '/signup');
  }
}

     

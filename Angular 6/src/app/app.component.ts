import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare const toggle:any;
declare const toggle1:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onClick(){
    toggle();
  }

  constructor (private router : Router){}

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

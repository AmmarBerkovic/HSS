import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hs-app';

  constructor(private router : Router){}

  isLoginForm(){
    return this.router.url === '/login';
  }
  isForgotPassword(){
    return this.router.url === '/forgot-password';
  }

  isHomeRoute(){
    return this.router.url === '/';
  }
}

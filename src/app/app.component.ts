import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginform-app';

  constructor(private router: Router){}

  isForgotPassword(){
    return this.router.url === '/forgot-password';
  }

  isHomeRoute(){
    return this.router.url === '/';
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  isHomeRegUsr(){
    return this.router.url === '/';
  }
  isAboutMe(){
    return this.router.url === '/about';
  }
  isMaterials(){
    return this.router.url === '/materials';
  }


}

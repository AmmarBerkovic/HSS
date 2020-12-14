import { Component, OnInit } from '@angular/core';
import { webpage } from 'src/webpage-data';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] })

export class AppComponent implements OnInit {
      title = webpage.title;
      description = webpage.description;

      constructor(private _router: Router) { }

      ngOnInit(): void {} 

      isHomeRoute() {
        return this._router.url === '/';
      }

      isRegForm() {
        return this._router.url === '/registration-form';
      }
      onSignUpClicked() {
        //window.open('/registration-form', '_blank');
        this._router.navigateByUrl('/registration-form');
        //location.assign('/registration-form');
      }

}

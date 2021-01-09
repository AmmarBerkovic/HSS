import { Component } from '@angular/core';
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
 
}

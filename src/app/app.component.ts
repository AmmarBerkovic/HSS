import { Component } from '@angular/core';
import { webpage } from 'src/webpage-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      title = webpage.title;
      description = webpage.description;
}

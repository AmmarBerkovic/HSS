import { Component } from '@angular/core';
import { webpage } from 'src/webpage-data';
import { Input } from '@angular/core';


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

      constructor() { }

}

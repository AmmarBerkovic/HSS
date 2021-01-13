import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeLayout: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setHomeLayout(){
    this.activeLayout = 1;
  }
  setMaterialsLayout(){
    this.activeLayout = 2;
  }
  setAboutUsLayout(){
    this.activeLayout = 3;
  }
}

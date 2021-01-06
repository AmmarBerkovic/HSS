import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  activeLayout : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  bookSectionLayout(){
    this.activeLayout = true;
  }
  videoSectionLayout(){
    this.activeLayout = false;
  }

}

import { Component, OnInit } from '@angular/core';
declare const toggle:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  onClick(){
    toggle();
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

declare const toggle:any;

@Component({
  selector: 'form-new-password',
  templateUrl: './form-new-password.component.html',
  styleUrls: ['./form-new-password.component.css']
})
export class FormNewPasswordComponent implements OnInit {
  onClick(){
    toggle();
  }
  constructor() { }

  ngOnInit() {
  }
}

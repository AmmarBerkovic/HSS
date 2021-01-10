import { Component, OnInit } from '@angular/core';

declare const toggle:any;
declare const toggle1:any;

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
  changed(){
    alert('Password change is successfull');
  }
}

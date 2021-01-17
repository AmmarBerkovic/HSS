import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit() {
  }
  changed(){
    window.alert('Password change is successfull');
    this.router.navigateByUrl('/login');
  }
}

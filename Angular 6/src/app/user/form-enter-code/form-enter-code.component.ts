import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'form-enter-code',
  templateUrl: './form-enter-code.component.html',
  styleUrls: ['./form-enter-code.component.css']
})
export class FormEnterCodeComponent implements OnInit {

  constructor(private router : Router){}

  onDoneClicked(){
    this.router.navigateByUrl('/new-password');
  }

  ngOnInit(): void{
    
  }
}

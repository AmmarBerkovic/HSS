import { Component, OnInit } from '@angular/core';
import { query } from '@angular/core/src/render3/query';
import { Router } from '@angular/router';

  


@Component({
  selector: 'form-enter-email',
  templateUrl: './form-enter-email.component.html',
  styleUrls: ['./form-enter-email.component.css']
})
export class FormEnterEmailComponent implements OnInit {

  constructor(private router : Router){}

  onSendClicked(){
    this.router.navigateByUrl('/enter-code');   

  }

  ngOnInit(): void{
    
  }
}
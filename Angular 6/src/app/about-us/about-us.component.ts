import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  declare slideShow: any;

  constructor() { }

  ngOnInit(): void {
    this.slideShow.showSlides(1);
  }

}

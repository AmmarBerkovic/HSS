import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-title',
  templateUrl: './welcome-title.component.html',
  styleUrls: ['./welcome-title.component.css']
})
export class WelcomeTitleComponent implements OnInit {

  @Input()
  title!: String;

  constructor() { }

  ngOnInit(): void {
  }

}

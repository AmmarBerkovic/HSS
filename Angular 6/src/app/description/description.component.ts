import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input()
  description!: String;

  constructor() { }

  ngOnInit(): void {
  }

}

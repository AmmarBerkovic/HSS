import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrls: ['./videos-form.component.css']
})
export class VideosFormComponent implements OnInit {

  menu: Menu = new Menu;
  options: Array<Option> = [];
  
  constructor() { }

  ngOnInit(): void {
    this.options = Array<Option>();
    this.options.push(new Option('Select...'));
    this.options.push(new Option('Author'));
    this.options.push(new Option('Title'));
    this.options.push(new Option('Date'));

    this.menu = new Menu();
    this.menu.option = this.options[0];
  }
  
}

export class Menu{
  option!: Option;
}

export class Option{
  constructor(name:String){
    this.name = name;
  }
  name:String;
}
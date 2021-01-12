import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrls: ['./videos-form.component.css']
})
export class VideosFormComponent implements OnInit {
  term?:any;
  filterData=[
    {
      "id":"1",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No"
    },
   
    {
      "id":"2",
      "title": "Partenariat tuniso-allemand pour la formation en tchnique otthopedique",
      "author": "Human study",
      "date":"12.01.2016.",
      "duration":"52m 59s",
      "resolution":"Low",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"3",
      "title": "Wheelchair Workshop: Partenariat Tuniso-Allemand pour la formation en tchnique otthopedique II  ",
      "author": "Youssef Salam",
      "date":"17.11.2018.",
      "duration":"1h 04m 39s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"4",
      "title": "Wheelchair Workshop: Tunisian-German Partnership for Training in orthopedic tecnique",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia ",
      "date":"12.11.2016.",
      "duration":"1h 46m 53s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"5",
      "title": "Wheelchair Workshop: Tunisian-German Partnership for Training in orthopedic tecnique II",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia",
      "date":"19.11.2016.",
      "duration":"51m 09s",
      "resolution":"High",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"6",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"High",
      "advertisable":"Yes",
      "watermark":"No"
    },
    {
      "id":"7",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"8",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"9",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Low",
      "advertisable":"No",
      "watermark":"No"
    },
    {
      "id":"10",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Medium",
      "advertisable":"Yes",
      "watermark":"No"
    }
    
  ]

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
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrls: ['./videos-form.component.css']
})
export class VideosFormComponent implements OnInit {
 
  title = 'app works!';
  videos = [
    {
      "id":"1",
      "title": "Beyond bionics: how the future od prothetics is redefining humanity ",
      "author": "John doe",
      "date":"26.06.2018.",
      "duration":"15m 32s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No",
      "link":"https://www.youtube.com/watch?v=GgTwa3CPrIE"
    },
   
    {
      "id":"4",
      "title": "Partenariat tuniso-allemand pour la formation en tchnique otthopedique",
      "author": "Human study",
      "date":"12.01.2016.",
      "duration":"52m 59s",
      "resolution":"Low",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_youssef_salam_ulp_myo_electrics_practical_workshop_seminar_tunis_07_17_12_2018/sd_patient_measurement_casting.mp4"
    },
    {
      "id":"8",
      "title": "Wheelchair Workshop: Partenariat Tuniso-Allemand pour la formation en tchnique otthopedique II  ",
      "author": "Youssef Salam",
      "date":"17.11.2018.",
      "duration":"1h 04m 39s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_youssef_salam_ulp_myo_electrics_practical_workshop_seminar_tunis_07_17_12_2018/assembly_of_sd_prosthesis_with_electric_elbow_final_fitting_with_patient.mp4"
    },
    {
      "id":"9",
      "title": "Wheelchair Workshop: Tunisian-German Partnership for Training in orthopedic tecnique",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia ",
      "date":"12.11.2016.",
      "duration":"1h 46m 53s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_cheryl_ann_tanudtanud_xavier_tchai_wheelchair_workshop_tunis_12_19_november_2016/basic_level_part_two.mp4"
    },
    {
      "id":"10",
      "title": "Wheelchair Workshop: Tunisian-German Partnership for Training in orthopedic tecnique II",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia",
      "date":"13.11.2016.",
      "duration":"51m 09s",
      "resolution":"High",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_cheryl_ann_tanudtanud_xavier_tchai_wheelchair_workshop_tunis_12_19_november_2016/basic_level_part_three.mp4"
    },
    {
      "id":"5",
      "title": "Wheelchair Practical Workshop Seminar: Intermediate level Part I ",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia",
      "date":"14.11.2016.",
      "duration":"1h 10m 27s",
      "resolution":"High",
      "advertisable":"Yes",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_cheryl_ann_tanudtanud_xavier_tchai_wheelchair_workshop_tunis_12_19_november_2016/intermediate_level_part_one.m4v"
    },
    {
      "id":"6",
      "title": "Wheelchair Practical Workshop Seminar: Intermediate level Part II",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia",
      "date":"15.11.2016.",
      "duration":"39m 48s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_cheryl_ann_tanudtanud_xavier_tchai_wheelchair_workshop_tunis_12_19_november_2016/intermediate_level_part_two.mp4"
    },
    {
      "id":"7",
      "title": "Wheelchair Practical Workshop Seminar: Intermediate level Service Part I",
      "author": "Cherlyn Ann, Tanudtanud Xavier-Tchia",
      "date":"16.11.2016.",
      "duration":"1h 26m 04s",
      "resolution":"Medium",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_cheryl_ann_tanudtanud_xavier_tchai_wheelchair_workshop_tunis_12_19_november_2016/intermediate_level_service_part_one.mp4"
    },
    {
      "id":"2",
      "title": "Orthotics of lower extremities: Ortdotics of Spastic and Flaccid Paresis Part I",
      "author": "Michael Rexing, Maike Truelsen",
      "date":"10.04.2017.",
      "duration":"2h 22m 41s",
      "resolution":"Low",
      "advertisable":"No",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_mixael_rexing_ole_orthotics_of_spastic_and_flaccid_paresis_tunis_10_15_april_2017/fitting_and_testing_afo_afo_dafo.mp4"
    },
    {
      "id":"3",
      "title": "Orthotics of lower extremities: Ortdotics of Spastic and Flaccid Paresis Part II",
      "author": "Michael Rexing, Maike Truelsen",
      "date":"15.1.2017.",
      "duration":"55m 51s",
      "resolution":"Medium",
      "advertisable":"Yes",
      "watermark":"No",
      "link":"http://hs-storage.org/cat_i/video/cat1_mixael_rexing_ole_orthotics_of_spastic_and_flaccid_paresis_tunis_10_15_april_2017/rectfication_and_thermoforming_of_kafo_afo.mp4"
    }
    
  
    
  ];

  //sorting
  key: string = 'title';
  reverse: boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
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
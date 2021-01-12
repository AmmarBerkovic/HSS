import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  term:any =null;

  filterData = [
    {
      "id":"1",
      "title": "Orthopadiestechnische Indikationen ",
      "author": "Andre-R. Baehler, Stefan Bieringer",
      "date":"17.10.2007.",
      "pages":"601",
      "edition":"Second edition",
      "languages":"German",
      "publisher":"Huber",
      "link":"http://hs-storage.org/library/books/baehler_orthopaedietechnische-indikatio_9783456939384.pdf"
    },
   
      {
      "id":"2",
      "title":"Gaint analysis in the Science of Rehabilitation",
      "author":"Joel A. DeLisa, M.D.",
      "date":"24.01.2012.",
      "pages":"65",
      "edition":"Second edition",
      "languages":"English",
      "publisher":"Department of Veterans Affairs",
      "link":"http://hs-storage.org/library/books/Gait_Analysis_in_the_Science_of_Rehabilitation.pdf"
      },
      {
      "id":"3",
      "title":"Foundations of Clinical Research: Application to Practice",
      "author":"Leslie G. Portney ",
      "date":"04.07.2009.",
      "pages":"226",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"Julie Levin Alexander",
      "link":"http://hs-storage.org/library/books/Foundations_of_Clinical_Research.pdf"
      },
      {
      "id":"4",
      "title":"Clinically and Technically Applied Biomechanics",
      "author":"Maggie Thomas, Valery Cooper, Stephanie Lung",
      "date":"20.12.2009.",
      "pages":"108",
      "edition":"Sixth edition",
      "languages":"English",
      "publisher":"George Brown College Prosthetic & Orthotic Programs",
      "link":"http://hs-storage.org/library/books/Clinically_and_Technically_Applied_Biomechanics.pdf"
      },
      {"id":"5",
      "title":"Biomechanics: Problem Solving for Functional Activity",
      "author":"Susan L. Roberts, M.Div ",
      "date":"21.09.1991.",
      "pages":"105",
      "edition":"Second edition",
      "languages":"English",
      "publisher":"Mosby Year Book" ,
      "link":"http://hs-storage.org/library/books/Biomechanics.pdf"
      },
      {"id":"6",
      "title":"Biomechanics in Clinic and Research: An interactive teaching and learning course",
      "author":"Jim Richards",
      "date":"09.02.2009.",
      "pages":"112",
      "edition":"First edition",
      "languages":"English",
      "publisher":"Elsevier",
      "link":"http://hs-storage.org/library/books/Biomechanics_in_Clinic_and_Research.pdf "
      },
      {"id":"7",
      "title":"Lower Limb Amputation in Patients with Vascular Disease",
      "author":"Anton Johannesson",
      "date":"03.05.2009.",
      "pages":"50",
      "edition":"Fifth edition",
      "languages":"English",
      "publisher":"Mediatryck",
      "link":"http://hs-storage.org/library/books/Lower_Limb_Amputation_in_Patients_with_Vascular_Disease.pdf "
      },
      {"id":"8",
      "title":"Qualitative Methods for Populations and Health Research",
      "author":"Bencha Yoddumnem-Attig, George Allen Attig, Kerry Richter",
      "date":"12.01.2001.",
      "pages":"226",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"The Institute for Population and Social Research, Mahidol University",
      "link":"http://hs-storage.org/library/books/Qualitative_Methods_for_Population_and_Health_Research.pdf"
      },
      {"id":"9",
      "title":"Spinal Cord Injury: Functional Rehabilitation",
      "author":"Martha Freeman Somers",
      "date":"19.08.2010.",
      "pages":"240",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"The Institute of Rehabilitation and Research, University of Pittsburgh Medical Center" ,
      "link":"http://hs-storage.org/library/books/Spinal_Cord_Injury.pdf"
      },
      {
        "id":"10",
        "title":"Anatomy and Human Movement: Structure and Function",
        "author":"Nigel Palastanga, Roger Soames",
        "date":"24.01.2012.",
        "pages":"635",
        "edition":"Sixth edition",
        "languages":"English",
        "publisher":"Elsevier",
        "link":"http://hs-storage.org/library/books/nigel palastanga_ roger soames-anatomy and human movement _ structure and function-churchill livingstone (2012).pdf"
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
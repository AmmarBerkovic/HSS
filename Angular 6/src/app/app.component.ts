import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { webpage } from 'src/webpage-data';
import { Input } from '@angular/core';
declare const toggle:any;
declare const toggle1:any;
declare const validatePassword:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = webpage.title;
  description = webpage.description;
  logoUrl = webpage.logoUrl;

  @Input()
  src!: String;

  constructor( private router:Router ) { }

  isRegistrationForm(){
    return this.router.url === '/registration-form';
  }

  onForgotPasswClicked(){
    this.router.navigateByUrl('/forgot-password');
  }

  onSignUpClicked(){
    this.router.navigateByUrl('/registration-form');
  }

  onSignInClicked(){
    this.router.navigateByUrl('/login');
  }

  onClick(){
    toggle();
  }

  onchange(){
    validatePassword();
  }
  onkeyup(){
validatePassword();
  }
  isHomeRoute(){
    return this.router.url === '/';
  }

  isForgotPassword(){
    return this.router.url === '/forgot-password';
  }
 
  isEnterCode(){
    return this.router.url === '/enter-code';
  }

  isNewPassword(){
    return this.router.url === '/new-password';
  }

  isLoginForm(){
    return (this.router.url === '/login');
  }

  isHomeRegUsr(){
    return this.router.url === '/body';
  }
  isAboutMe(){
    return this.router.url === '/about';
  }
  isMaterials(){
    return this.router.url === '/materials';
  }
  isUserProfile(){
    return this.router.url === '/userprofile';
  }
  term?:any ;

  filterData = [
    {
      "id":"1",
      "title": "Orthopadiestechnische Indikationen ",
      "author": "Andre-R. Baehler, Stefan Bieringer",
      "date":"17.10.2007.",
      "pages":"601",
      "edition":"Second edition",
      "languages":"German",
      "publisher":"Huber"
    },
   
      {
      "id":"2",
      "title":"Gaint analysis in the Science of Rehabilitation",
      "author":"Joel A. DeLisa, M.D.",
      "date":"24.01.2012.",
      "pages":"65",
      "edition":"Second edition",
      "languages":"English",
      "publisher":"Department of Veterans Affairs"
      },
      {
      "id":"3",
      "title":"Foundations of Clinical Research: Application to Practice",
      "author":"Leslie G. Portney ",
      "date":"04.07.2009.",
      "pages":"226",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"Julie Levin Alexander"
      },
      {
      "id":"4",
      "title":"Clinically and Technically Applied Biomechanics",
      "author":"Maggie Thomas, Valery Cooper, Stephanie Lung",
      "date":"20.12.2009.",
      "pages":"108",
      "edition":"Sixth edition",
      "languages":"English",
      "publisher":"George Brown College Prosthetic & Orthotic Programs"
      },
      {"id":"5",
      "title":"Biomechanics: Problem Solving for Functional Activity",
      "author":"Susan L. Roberts, M.Div ",
      "date":"21.09.1991.",
      "pages":"105",
      "edition":"Second edition",
      "languages":"English",
      "publisher":"Mosby Year Book" 
      },
      {"id":"6",
      "title":"Biomechanics in Clinic and Research: An interactive teaching and learning course",
      "author":"Jim Richards",
      "date":"09.02.2009.",
      "pages":"112",
      "edition":"First edition",
      "languages":"English",
      "publisher":"Elsevier"
      },
      {"id":"7",
      "title":"Lower Limb Amputation in Patients with Vascular Disease",
      "author":"Anton Johannesson",
      "date":"03.05.2009.",
      "pages":"50",
      "edition":"Fifth edition",
      "languages":"English",
      "publisher":"Mediatryck"
      },
      {"id":"8",
      "title":"Qualitative Methods for Populations and Health Research",
      "author":"Bencha Yoddumnem-Attig, George Allen Attig, Kerry Richter",
      "date":"12.01.2001.",
      "pages":"226",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"The Institute for Population and Social Research, Mahidol University"
      },
      {"id":"9",
      "title":"Spinal Cord Injury: Functional Rehabilitation",
      "author":"Martha Freeman Somers",
      "date":"19.08.2010.",
      "pages":"240",
      "edition":"Third edition",
      "languages":"English",
      "publisher":"The Institute of Rehabilitation and Research, University of Pittsburgh Medical Center" 
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
        }

  ]
}

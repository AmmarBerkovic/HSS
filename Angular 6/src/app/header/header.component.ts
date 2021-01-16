import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeLayout: number = 1;
  //router: any;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }

  setHomeLayout(){
    this.activeLayout=1;
  }
  setMaterialsLayout(){
    this.activeLayout = 2;
  }
  setAboutUsLayout(){
    this.activeLayout = 3;
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}

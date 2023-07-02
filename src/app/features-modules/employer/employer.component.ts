import { Component,  } from '@angular/core';
import {  NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent  {
  empolyee = true;
  breadcrum =true;
  base="";
  page="";
  last ="";
  url: string;
  constructor(private Router: Router,location: Location) {
    Router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.url = location.path();
   }

  
  getRoutes(event: Router | NavigationStart){
    const splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
        if (
          event.url === '/employer/company-profile' ||
          event.url === '/employer/company-details' ||
          event.url === '/employer/company-project' ||
          event.url === '/employer/company-gallery' ||
          event.url === '/employer/company-reviews' || 
          event.url === '/employer/chats' ||
          event.url === '/employer/post-project' ||
          event.url === '/employer/developer'
          

        ) {
          this.empolyee = false;
          this.breadcrum = false;
        } else {
          this.empolyee = true;
          this.breadcrum = true;
        }
        // if(
        //   event.url === '/employer/chats'
        // ){
        //   this.breadcrum = false;
        // }else{
        //   this.breadcrum = true;
        // }
  }
}

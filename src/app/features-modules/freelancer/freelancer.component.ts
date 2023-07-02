import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ShareDataService } from 'src/app/core/data/share-data.service';
@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent  {
  breadcrum =true;
  freelancer = true;
  base="";
  page="";
  last ="";
  url!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebar: Array<any> = [];
  constructor(private Router: Router,location: Location, private common: CommonService,private data :ShareDataService) { 
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    Router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
  this.sidebar = this.data.freelancer_sidemenu;

  }

 
  getRoutes(event: Router | NavigationStart){
    const splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
        if (
          event.url === '/freelancer/message' ||
          event.url === '/freelancer/project' ||
          event.url === '/freelancer/project-details' ||
          event.url === '/freelancer/developer-profile' ||
          event.url === '/freelancer/developers-details' 
          

        ) {
          this.freelancer = false;
          this.breadcrum = false;
        } else {
          this.freelancer = true;
          this.breadcrum = true;
        }
  }
}

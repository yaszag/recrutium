import { Component,  } from '@angular/core';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { NavigationEnd,  Router } from '@angular/router';
// import { SideBarData } from 'src/app/core/models/models';
export interface SidemenuItem {
  // Specify the types for the properties in the sidemenu item
  // For example:
  title: string;
  page: string;
  route: string;
  icon: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  {
  base="";
  page="";
  last = '';
  setactive =false;
  
  sidemenu: SidemenuItem[] = [];
  currentroute  ='';
  constructor(private data :ShareDataService,private Router: Router) {
    // this.sidemenu = this.data.sidemenu;
    Router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.data.getSidemenu.subscribe((res:  SidemenuItem[]) => {
      this.sidemenu = res;
    });
    this.getRoutes(this.Router);

  }

  
  getRoutes(event: Router | NavigationEnd){
    this.currentroute = event.url;
    const splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
   
  }
  setActive(menu:string){
    sessionStorage.setItem('title' , menu)
    this.sidemenu.map((title: SidemenuItem) => {
     
      const active = sessionStorage.getItem('title');
      if(active == title.page){
        this.setactive = true;
      }else{
        this.setactive = false;

      }

  });
  }
}

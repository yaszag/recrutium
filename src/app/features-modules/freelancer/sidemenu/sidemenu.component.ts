import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
import { SidebarData } from 'src/app/core/models/models';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  {
  base="";
  page="";
  last = '';
  currentroute  ='';
  sidebar: SidebarData[] = [];
  constructor(private data :ShareDataService,private Router: Router,private common : CommonService) { 
    this.common.base.subscribe((res:string)=>{
      this.base =res;
    })
    this.common.page.subscribe((res:string)=>{
      this.page =res;
    })
    this.common.last.subscribe((res:string)=>{
      this.last =res;
    })

  this.sidebar = this.data.freelancer_sidemenu;
  }

 

}

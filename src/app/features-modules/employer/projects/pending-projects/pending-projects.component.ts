import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { empprojects } from 'src/app/core/models/models';

@Component({
  selector: 'app-pending-projects',
  templateUrl: './pending-projects.component.html',
  styleUrls: ['./pending-projects.component.scss']
})
export class PendingProjectsComponent  {
  empprojects: Array<empprojects> = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers.subscribe((data: Array<empprojects>) => {
      this.empprojects = data
    })
   }
  

}

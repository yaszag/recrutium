import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { freelist } from 'src/app/core/models/models';

@Component({
  selector: 'app-ongoingprojects',
  templateUrl: './ongoingprojects.component.html',
  styleUrls: ['./ongoingprojects.component.scss']
})
export class OngoingprojectsComponent  {
  freelist: Array<freelist> = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers4.subscribe((data: Array<freelist>) => {
      this.freelist = data
    })
   }
 
}
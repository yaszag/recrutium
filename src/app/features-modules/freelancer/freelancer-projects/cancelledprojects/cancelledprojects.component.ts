import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { freecompleted } from 'src/app/core/models/models';

@Component({
  selector: 'app-cancelledprojects',
  templateUrl: './cancelledprojects.component.html',
  styleUrls: ['./cancelledprojects.component.scss']
})
export class CancelledprojectsComponent  {
  freecompleted: Array<freecompleted> = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers5.subscribe((data: Array<freecompleted>) => {
      this.freecompleted = data
    })
   }
  

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { freecompleted } from 'src/app/core/models/models';

@Component({
  selector: 'app-completedprojects',
  templateUrl: './completedprojects.component.html',
  styleUrls: ['./completedprojects.component.scss']
})
export class CompletedprojectsComponent  {
  freecompleted!: Array<freecompleted>;
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers5.subscribe((data: Array<freecompleted>) => {
      this.freecompleted = data
    })
   }
 

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { freeprojects } from 'src/app/core/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  {
  public isButtonVisible = true;
  public isButtonsVisible = true;
  public isButtonVisibles = true;
  public isButtonVisibl = true;
  public isButtonsVisibles = true;


  freeprojects: Array<freeprojects> = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers3.subscribe((data:Array<freeprojects>) => {
      this.freeprojects = data
    })
   }

}
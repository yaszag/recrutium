import { Component,  } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent  {
  removePic = true;
  removeIcon = true;
  
  removePicture(){
    this.removePic = !this.removePic; 
  }
  removeFavicon(){
    this.removeIcon = !this.removeIcon; 
  }
 

}

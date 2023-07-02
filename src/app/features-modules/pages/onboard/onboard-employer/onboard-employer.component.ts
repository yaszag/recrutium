import { Component } from '@angular/core';

@Component({
  selector: 'app-onboard-employer',
  templateUrl: './onboard-employer.component.html',
  styleUrls: ['./onboard-employer.component.scss']
})
export class OnboardEmployerComponent {
  first = 1;
  public isChecked = true;
  public serviceArray:  Array<number> = [];
 
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:number):void {
    this.serviceArray.splice(index, 1)
  }
  next(stage:number):void {
    this.first = stage;
  }
}

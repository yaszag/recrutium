import { Component } from '@angular/core';

@Component({
  selector: 'app-onboard-screen',
  templateUrl: './onboard-screen.component.html',
  styleUrls: ['./onboard-screen.component.scss']
})
export class OnboardScreenComponent  {
  public serviceArray: Array<number> = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public skill: any = [];
  public education: Array<number> = [];
  public certification: Array<number> = [];
  public experiance: Array<number> = [];
  first = 1;
  public isChecked = true;

 
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index: number):void {
    this.serviceArray.splice(index, 1)
  }
  public addExperiance():void {
    this.experiance.push(1)
  }
  public deleteExperiance(index: number):void {
    this.experiance.splice(index, 1)
  }
  public addCertification():void {
    this.certification.push(1)
  }
  public deleteCertification(index: number):void {
    this.certification.splice(index, 1)
  }
  public addEducation():void {
    this.education.push(1)
  }
  public deleteEducation(index: number):void {
    this.education.splice(index, 1)
  }
  public addSkill():void {
    this.skill.push(1)
  }
  public deleteSkill(index: number):void {
    this.skill.splice(index, 1)
  }
 
  next(stage:number):void {
    this.first = stage;
  }
  

}

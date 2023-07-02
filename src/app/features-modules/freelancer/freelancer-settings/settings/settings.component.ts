import { Component,  } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent  {
  public skillsArray: number[] = [1,2,3,4,5,6];
  public awardsArray: number[] = [1,2,3];
  public langArray: number[] = [1,2,3];
  public expArray: number[] = [1];
  public eduArray: number[] = [1];
  gender = 'male';
  type = 'select';
  country = 'india';
  degree = 'select';
  public addSkills():void {
    this.skillsArray.push(1)
  }
  public deleteSkills(index: number):void {
    this.skillsArray.splice(index, 1)
  }
  public addAward():void {
    this.awardsArray.push(1)
  }
  public deleteAward(index: number):void {
    this.awardsArray.splice(index, 1)
  }
  public addLang():void {
    this.langArray.push(1)
  }
  public deleteLang(index: number):void {
    this.langArray.splice(index, 1)
  }
  public addExp():void {
    this.expArray.push(1)
  }
  public deleteExp(index:number):void {
    this.expArray.splice(index, 1)
  }
  public addEdu():void {
    this.eduArray.push(1)
  }
  public deleteEdu(index: number):void {
    this.eduArray.splice(index, 1)
  }


}

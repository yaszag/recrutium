import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
@Component({
  selector: 'app-withdrawn',
  templateUrl: './withdrawn.component.html',
  styleUrls: ['./withdrawn.component.scss']
})
export class WithdrawnComponent  {
  public filter = false;
  base="";
  page="";
  last = '';
  public str2! : string;
  public str !: string;
  constructor(private common : CommonService,
    public router: Router) {
      this.common.base.subscribe((res:string)=>{
        this.base =res;
      })
      this.common.page.subscribe((res:string)=>{
        this.page =res;
      })
      this.common.last.subscribe((res:string)=>{
        this.last =res;
        this.str = this.last;
        this.str2 = this.str.charAt(0).toUpperCase() + this.str.slice(1);
      })
     }

  
  openFilter(){
    this.filter = !this.filter
  }

}

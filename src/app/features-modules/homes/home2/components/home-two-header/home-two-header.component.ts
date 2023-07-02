import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// import { ShareDataService } from 'src/app/core/data/share-data.service';
// import { CommonService } from 'src/app/core/services/common/common.service';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
  selector: 'app-home-two-header',
  templateUrl: './home-two-header.component.html',
  styleUrls: ['./home-two-header.component.scss']
})
export class HomeTwoHeaderComponent implements OnInit {
  menuElement!: ElementRef;
  navbar: Array<string> = [];

  sticky = false;
  elementPosition!: string;
  base=""
  page="";
  constructor(private Router: Router,
    private navservices : NavbarService,) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.base = data.url.split('/')[1];
      }
    });
  }
  public toggleSidebar(): void {
    this.navservices.openSidebar();
  }
  public hideSidebar(): void {
    this.navservices.closeSidebar();
  }
  ngOnInit() {
    

    window.addEventListener("resize", function () {
      // if (window.innerWidth > 991) {
      //     (document.getElementById('windows')as HTMLDivElement).classList.remove('menu-opened');
      //     (document.getElementById('sidebar')as HTMLDivElement).classList.remove('opened');
      //     let x=document.querySelectorAll<HTMLElement>('.submenu') ;
      //     x.forEach((element) => {
      //       element.style.display="block";
      //     });        
      // }else {
      //   let x=document.querySelectorAll<HTMLElement>('.submenu') ;
      //     x.forEach((element) => {
      //       element.style.display="none";

      //     });
      // }
  })

  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll == 0) {
      this.sticky = false;
    } else {
      this.sticky = true;
    }
  }
}

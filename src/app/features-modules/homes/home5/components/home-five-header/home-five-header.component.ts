import {
  Component,
  ElementRef,
  HostListener,
 
  
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
  selector: 'app-home-five-header',
  templateUrl: './home-five-header.component.html',
  styleUrls: ['./home-five-header.component.scss']
})
export class HomeFiveHeaderComponent  {
  menuElement!: ElementRef;
  navbar: Array<string> = [];
  sticky = false;
  elementPosition !: string;
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
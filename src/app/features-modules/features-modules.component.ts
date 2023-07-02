import {  Component, } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { NavbarService } from 'src/app/core/services/navbar.service';
import { AuthService } from '../core/services/auth/auth.service';
import { CommonService } from '../core/services/common/common.service';
import { SideBarService } from '../core/services/side-bar/side-bar.service';
import { SpinnerService } from '../core/services/spinner/spinner.service';
interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
}
interface Menu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
  base: string;
  subMenus: SubMenu[];
}
interface AdminSideBar {
  tittle: string;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: Menu[];
}


@Component({
  selector: 'app-features-modules',
  templateUrl: './features-modules.component.html',
  styleUrls: ['./features-modules.component.scss'],
})
export class FeaturesModulesComponent  {
  chat = false;
  home2 = false;
  home3 = false;
  home4 = false;
  home5 = false;
  public strokeValue = 0;
  public progress = 0;
  // data: SidebarData;
  expandMenu!: boolean;
  miniSidebar!: boolean;
  
  showMiniSidebar = false;
  public isuserHeader = false;
  public isFooter = false;
  public authenticated = false;
  // public miniSidebar = false;
  // public expandMenu = false;
  public mobileSidebar = false;
  base = '';
  page = '';
  last = '';
  url!: string;
  constructor(
    private Router: Router,
    private navservice: NavbarService,
    private common: CommonService,
    private sideBar: SideBarService,
    private data: ShareDataService,
    private auth: AuthService,
    private spinner: SpinnerService
  ) {
   
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });

    Router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.navservice.toogleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });


     // <* condition to check side bar position *>
     this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == "true") {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // <* condition to check mobile side bar position *>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.sideBar.expandSideBar.subscribe((res:any) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == false && this.miniSidebar == true) {
        this.data.Admin_sideBar.map((mainMenus: AdminSideBar) => {
          mainMenus.menu.map((resMenu: Menu) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == true && this.miniSidebar == true) {
        this.data.Admin_sideBar.map((mainMenus: AdminSideBar) => {
          mainMenus.menu.map((resMenu:Menu) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });

    this.Router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.page = URL[1];
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });

    this.Router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
    
   
  }
  
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  getRoutes(event: Router | NavigationStart) {
    const splitVal = event.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      this.base === 'home2' ||
      this.base === 'home3' ||
      this.base === 'home' ||
      this.base === 'home5' ||
      this.base === 'admin' ||
      this.page === 'message' ||
      this.page === 'chats' ||
      this.page === 'onboard-employer' ||
      this.page === 'onboard-screen'
      
   
     
     
    ) {
      this.isuserHeader = false;
      this.isFooter = false;
    } else {
      this.isuserHeader = true;
      this.isFooter = true;
    }
    if (localStorage.getItem('LoginData')) {

      this.authenticated = true;
    } else {

      this.authenticated = false;
    }
  }
  // private findRoute(routeStatus: string) {
  //   console.log('routeStatus', typeof routeStatus);
  //   if (routeStatus === 'home' || routeStatus === '') {
  //     return true;
  //   } else if (routeStatus === 'pages') {
  //     return true;
  //   } else if (routeStatus === 'blog') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // scroll the page to top position
  // public scrollToTop(): void {
  //   window.scrollTo(0, 0);
  // }
  // // function to calculate the scroll progress
  // private calculateScrollPercentage(): void {
  //   window.addEventListener('scroll', () => {
  //     var body = document.body,
  //       html = document.documentElement;
  //     //gets the total height of page till scroll
  //     var totalheight = Math.max(
  //       body.scrollHeight,
  //       body.offsetHeight,
  //       html.clientHeight,
  //       html.scrollHeight,
  //       html.offsetHeight
  //     );
  //     // calculates the total stroke value
  //     this.progress = totalheight;
  //     var currentDistance = window.scrollY / (totalheight / 3000);
  //     // calculates the current stroke value
  //     this.strokeValue = totalheight - currentDistance / 8;
  //     // condition to hide scroll progress if page in top
  //     if (window.scrollY == 0) {
  //       this.strokeValue = totalheight;
  //     }
  //     // condition to make scroll progress to 100 if page in bottom
  //     if (window.innerHeight + window.scrollY >= totalheight) {
  //       this.strokeValue = 0;
  //     }
    

  //   });
  // }
  // scroll the page to top position
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}

import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  
  
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  
} from '@angular/router';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements AfterViewInit {
  public isSidemenu = false;
  constructor(private Router: Router) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/admin/auth/login' ||
          event.url === '/admin/auth/register' ||
          event.url === '/admin/auth/forgot-password'
        ) {
          this.isSidemenu = false;
          sessionStorage.setItem('isSidemenu', 'false');
        } else {
          this.isSidemenu = true;
          sessionStorage.setItem('isSidemenu', 'true');
        }
      }
    });
    if(sessionStorage.getItem('isSidemenu')== 'true') {
      this.isSidemenu = true;
    }else {
      this.isSidemenu = false;
    }
  }
  ngAfterViewInit() {
    feather.replace();
  }


}

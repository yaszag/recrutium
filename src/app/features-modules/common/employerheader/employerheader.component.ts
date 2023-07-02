import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { NavbarService } from 'src/app/core/services/navbar.service';


@Component({
  selector: 'app-employerheader',
  templateUrl: './employerheader.component.html',
  styleUrls: ['./employerheader.component.scss'],
})
export class EmployerheaderComponent {
  base = '';
  page = '';
  last = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navbar: Array<any> = [];
  constructor(
    private Router: Router,
    private data: ShareDataService,
    private navservices: NavbarService,
    private common: CommonService
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
    this.navbar = this.data.sideBar;
  }

  employer() {
    localStorage.setItem('employer', 'employer');
  }
  freelancer() {
    localStorage.setItem('freelancer', 'freelancer');
  }
  setLocalStorage(value: string): void {
    localStorage.setItem(value, value);
  }
  otherPages(val: string) {
    localStorage.setItem(val, val);
  }
  public toggleSidebar(): void {
    this.navservices.openSidebar();
  }
  public hideSidebar(): void {
    this.navservices.closeSidebar();
  }
  // navigate(name: any) {
  //   this.page = name;
  //   if (name === 'Admin') {
  //     localStorage.setItem('admin', 'admin');
  //     this.Router.navigate(['/admin/auth/login']);
  //   }
  // }
}

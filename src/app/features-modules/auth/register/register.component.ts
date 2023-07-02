import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(public router: Router) {}

  login() {
    this.router.navigate(['/auth/login']);
  }
  navigateToOnboardScreen() {
    this.router.navigate(['/pages/onboard-screen']);
  }
}

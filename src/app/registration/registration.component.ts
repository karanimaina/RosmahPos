import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private router:Router) {

  }
toLogin() {
    this.router.navigate(['/login'])
  }
  goToLogin() {
    this.router.navigate(['/login'])
  }
}

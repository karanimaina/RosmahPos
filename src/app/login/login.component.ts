import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private  route:Router) {
  }

  login() {
    this.route.navigate(['/nav'])
    // if (res=="failure"){
    //   alert("an error has occurred")
    // }
    console.log("button clicked")
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {RegistrationComponent} from "../registration/registration.component";
import { FormComponent } from './form/form.component';
import {RouterOutlet} from "@angular/router";
import { FormNavComponent } from './form-nav/form-nav.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    FormComponent,
    FormNavComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class FormsModule { }

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../login/login.component";
import {RegistrationComponent} from "../registration/registration.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {
}

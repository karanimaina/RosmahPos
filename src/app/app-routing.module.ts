import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'customer',component:CustomerComponent},
  {path:'product',component:ProductsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

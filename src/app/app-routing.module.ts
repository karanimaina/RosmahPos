import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProductsComponent} from "./products/products.component";
import {SalesComponent} from "./sales/sales.component";
import {SaleReportComponent} from "./sale-report/sale-report.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {SupplierFormComponent} from "./supplier-form/supplier-form.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'customer',component:CustomerComponent},
  {path:'product',component:ProductsComponent},
  {path:'sale',component:SalesComponent},
  {path:'saleReport',component:SaleReportComponent},
  {path:'product-form',component:ProductFormComponent},
  {path:'supplier-form',component:SupplierFormComponent},
  {path:'customer-form',component:SupplierFormComponent},
  {path:'register' ,component:RegistrationComponent},
  {path:'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

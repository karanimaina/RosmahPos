import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customers} from "../models/customers";
import {Observable} from "rxjs";
import {Supplier} from "../models/supplier";
import {Product} from "../models/product";
import {Sales} from "../models/sales";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) {}
  BASE_API = 'http://localhost:8080'
  CreateCustomer(customer:Customers):Observable<any>{
    return  this.httpClient.post<Customers>(`${this.BASE_API}api/v1/add/customer`,customer)
  }
  CreateSupplier(supplier:Supplier):Observable<any>{
    return  this.httpClient.post<Supplier>(`${this.BASE_API}/api/v1/add/supplier`,supplier)
  }
  CreateProduct(product:Product):Observable<any>{
    return  this.httpClient.post<Product>(`${this.BASE_API}/api/v1/add/product`,product)
  }
  CreateSale(sale:Sales):Observable<any>{
    return  this.httpClient.post<Sales>(`${this.BASE_API}/api/v1/add/sales`,sale)
  }
  GetProducts():Observable<any>{
    return  this.httpClient.get<Product[]>(`${this.BASE_API}/api/v1/get/products`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customers} from "../models/customers";
import {Observable} from "rxjs";
import {Supplier} from "../models/supplier";
import {Product} from "../models/product";
import {GetProduct} from "../models/get-product";
import {NameQuantity} from "../models/name-quantity";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_API = 'http://localhost:8080'

  constructor(private httpClient :HttpClient) {}

  CreateCustomer(customer:Customers):Observable<any>{
    return  this.httpClient.post<Customers>(`http://localhost:8080/api/v1/add/customer`,customer)
  }
   GetCustomer():Observable<any>{
    return  this.httpClient.get(`http://localhost:8080/api/v1/get/customers`)
  }
  CreateSupplier(supplier:Supplier):Observable<any>{
    return  this.httpClient.post<Supplier>(`${this.BASE_API}/api/v1/add/supplier`,supplier)
  }
  CreateProduct(product:Product):Observable<any>{
    return  this.httpClient.post<Product>(`${this.BASE_API}/api/v1/add/product`,product)
  }
  GetProducts():Observable<any>{
    return  this.httpClient.get<GetProduct[]>(`http://localhost:8080/api/v1/get/products`)
  }
  CreateSale(sale:NameQuantity):Observable<any>{
      return  this.httpClient.post<NameQuantity>(`${this.BASE_API}/api/v1/add/sales`,sale)
  }
  GetSale():Observable<any> {
    return this.httpClient.get(`${this.BASE_API}/api/v1/get/sales`)
  }
  GetSuppliers():Observable<any>{
    return  this.httpClient.get(`${this.BASE_API}/api/v1/get/suppliers`)
  }
}

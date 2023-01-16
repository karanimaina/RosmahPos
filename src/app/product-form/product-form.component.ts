import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/product";
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {


  constructor(private apiService:ApiService,private  router :Router) {
  }

  product1:Product
  productName = new FormControl("",[
    Validators.required,
    Validators.minLength(4)
  ])

  category = new FormControl("",[
    Validators.required,
    Validators.minLength(4)
  ])
  supplier = new FormControl("",[
    Validators.required,
    Validators.minLength(4)
  ])
  expiryDate = new FormControl('',[
    Validators.required,

  ])

  buyingPrice = new FormControl(0,[
    Validators.required,
  ])
  sellingPrice = new FormControl(0,[
    Validators.required,
    Validators.pattern(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/)

  ])
  quantity = new FormControl(0,[
    Validators.required,
    Validators.pattern(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/)


  ])
  total = new FormControl(0,[
    Validators.required,
    Validators.pattern(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/)


  ])
  product = new FormGroup({
    productName: this.productName,
    category: this.category,
    supplier:this.supplier,
    expiryDate:this.expiryDate,
    buyingPrice: this.buyingPrice,
    sellingPrice: this.sellingPrice,
    quantity:this.quantity,

  })

  saveProduct() {
    this.product1 = new Product(this.productName.value!, this.category.value!, this.supplier.value!, this.expiryDate.value!, this.buyingPrice.value!, this.sellingPrice.value!, this.quantity.value!,)
    // try {
      this.apiService.CreateProduct(this.product1).subscribe((res: any) => {
        this.router.navigate(["/product"])
      })
    // }catch (e){
    //
    // }
  }
  }

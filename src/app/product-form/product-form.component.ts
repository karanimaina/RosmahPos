import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productName = new FormControl("product name",[
    Validators.required,
    Validators.minLength(4)
  ])

  category = new FormControl("product name",[
    Validators.required,
    Validators.minLength(4)
  ])
  supplier = new FormControl("product name",[
    Validators.required,
    Validators.minLength(4)
  ])
  expiryDate = new FormControl(0,[
    Validators.required,

  ])

  buyingPrice = new FormControl(0,[
    Validators.required,

  ])
  sellingPrice = new FormControl(0,[
    Validators.required,

  ])
  quantity = new FormControl("product name",[
    Validators.required,

  ])
  total = new FormControl("product name",[
    Validators.required,

  ])
  product = new FormGroup({
    productName: this.productName,
    category: this.category,
    supplier:this.supplier,
    expiryDate:this.expiryDate,
    buyingPrice: this.buyingPrice,
    sellingPrice: this.sellingPrice,
    quantity:this.quantity,
    total:this.total


  })
}

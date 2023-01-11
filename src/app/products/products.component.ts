import { Component } from '@angular/core';
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(private route:Router) {
}
  navigateToForm() {
    this.route.navigate(["product-form"])
  }
}

import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../service/api.service";
import {Supplier} from "../models/supplier";

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent {
supplier:Supplier

  constructor(private  api:ApiService,  private router: Router) {
  }


  supplierName = new FormControl("",[
    Validators.minLength(4),
    Validators.required
  ])
  contactName = new FormControl("",[
    Validators.minLength(4),
    Validators.required
  ])
  contactPhone = new FormControl("",[
    Validators.minLength(4),
    Validators.required
  ])
 debt = new FormControl(0,[
    Validators.required
  ])
  supplierForm = new FormGroup({
    supplierName : this.supplierName,
    contactName :this.contactName,
    contactPhone : this.contactPhone,
    debt:this.debt
  })

  saveSupplier() {
    this.supplier = new Supplier(this.supplierName.value!,this.contactName.value!, this.contactPhone.value!, this.debt.value!)
    this.api.CreateSupplier(this.supplier).subscribe((res:any)=>{
      this.router.navigate(['/supplier'])
    })
  }
}

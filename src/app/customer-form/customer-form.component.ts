import { Component } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";
import {Customers} from "../models/customers";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  closeResult = '';
  customer:Customers
  constructor(private route:Router, private modalService:NgbModal,private api:ApiService) {}
  openComponent(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  customerName = new FormControl("",[
    Validators.required,
    Validators.minLength(4)
  ])
  phoneNumber = new FormControl("",[
    Validators.required,
    Validators.minLength(12)
  ])
 debt = new FormControl(0,[
    Validators.required,
  ])

customerForm = new FormGroup({
  customerName : this.customerName,
  phoneNumber :this.phoneNumber,
  debt :this.debt
}
)
  inSubmission: false;
  saveCustomer() {
    this.customer = new Customers(this.customerName.value!,this.phoneNumber.value!,this.debt.value!)
    this.api.CreateCustomer(this.customer).subscribe(()=> {
      this.route.navigate(['/customer'])
    })
  }
}

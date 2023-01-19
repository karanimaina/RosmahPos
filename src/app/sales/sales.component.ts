import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {NameQuantity} from "../models/name-quantity";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../service/api.service";
import {GetSales} from "../models/get-sales";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  nameQuantity:NameQuantity
  sale1:GetSales[]
  closeResult = '';
  quantity:number = 0
  name:string = ''

  constructor(private route:Router,private api:ApiService, private modalService:NgbModal) {}

  ngOnInit() {
        this.api.GetSale().subscribe((res:any)=>{
          this.sale1 = res.data
        })
    }

  open(content: any) {
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


  addSale() {
   this.nameQuantity  = new NameQuantity(this.name,this.quantity)
   this. api.CreateSale(this.nameQuantity).subscribe(()=>{
   alert("sale success")
})
  }
}

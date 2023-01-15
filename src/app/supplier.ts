export class Supplier {
  supplierName:string
  contactPerson:string
  contactPhoneNumber:string
  debt:number

  constructor(supplierName: string, contactPerson: string, contactPhoneNumber: string, debt: number) {
    this.supplierName = supplierName;
    this.contactPerson = contactPerson;
    this.contactPhoneNumber = contactPhoneNumber;
    this.debt = debt;
  }
}

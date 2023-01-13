export class Customers {
  customerName:string
  phoneNumber: string
  debt :number
  constructor(customerName: string, phoneNumber: string, debt: number) {
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.debt = debt;
  }
}

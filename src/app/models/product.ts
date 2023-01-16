export class Product {
  productName:string
  category:string
  supplier:string
  expiryDate:string
  buyingPrice:number
  sellingPrice:number
  quantity:number


  constructor( productName: string, category: string, supplier: string, expiryDate: string, buyingPrice: number, sellingPrice: number, quantity: number) {
    this.productName = productName;
    this.category = category;
    this.supplier = supplier;
    this.expiryDate = expiryDate;
    this.buyingPrice = buyingPrice;
    this.sellingPrice = sellingPrice;
    this.quantity = quantity;
  }
}

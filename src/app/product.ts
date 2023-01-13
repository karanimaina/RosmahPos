export class Product {
  productCode:string
  productName:string
  category:string
  supplier:string
  expiryDate:Date
  buyingPrice:string
  sellingPrice:string
  quantity:string
  quantityLeft:string
  total:string

  constructor(productCode: string, productName: string, category: string, supplier: string, expiryDate: Date, buyingPrice: string, sellingPrice: string, quantity: string, quantityLeft: string, total: string) {
    this.productCode = productCode;
    this.productName = productName;
    this.category = category;
    this.supplier = supplier;
    this.expiryDate = expiryDate;
    this.buyingPrice = buyingPrice;
    this.sellingPrice = sellingPrice;
    this.quantity = quantity;
    this.quantityLeft = quantityLeft;
    this.total = total;
  }
}

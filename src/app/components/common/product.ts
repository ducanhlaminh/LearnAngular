export class ProductType {
  name: string;
  price: number;
  salePrice: number;

  constructor(name: string, price: number,salePrice: number){
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
  }
}


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../common/product';

@Component({
  selector: 'app-prodcut-item',
  templateUrl: './prodcut-item.component.html',
  styleUrls: ['./prodcut-item.component.css']
})
export class ProdcutItemComponent {
   products: ProductType[]=[
    new ProductType('ao',20000000,30),
    new ProductType('quan',2300000,40),
   ]
   @Input() sum:number;
   @Output() newSum = new EventEmitter<number>();
   classes= 'border-2 rounded-xl'
  handlePlus = (product:ProductType,sum:number)=>{
    sum=sum+product.price;
   }
   handleClick=(product:ProductType)=>{

    this.sum=this.sum+product.price;
    this.addNewItem(this.sum)
   }
   addNewItem(value: number) {
    this.newSum.emit(value);
}
}

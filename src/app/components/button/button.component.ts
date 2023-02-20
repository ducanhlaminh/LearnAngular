import { Component, Input } from '@angular/core';
import { ProductType } from '../common/product';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() onClick: (sum:number,product:ProductType) => void;
  // handelClick( sum:number,product:ProductType){
  //   (this.onClick)? this.onClick():'';
  // }
}

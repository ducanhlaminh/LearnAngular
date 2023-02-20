import { Component } from '@angular/core';
import { ProductType } from './components/common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  sum:number = 1000;
  onNewSum(value:number){
    this.sum = this.sum+value;
  }
}

import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock2';

@Component({
  selector: 'app-create-stock3',
  templateUrl: './create-stock3.component.html',
  styleUrls: ['./create-stock3.component.css']
})
export class CreateStock3Component {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
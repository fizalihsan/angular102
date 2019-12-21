import { Component, OnInit } from '@angular/core';
import { Stock2Service } from 'src/app/services/stock2.service';
import { Stock2 } from 'src/app/model/stock2';

@Component({
  selector: 'app-create-stock2',
  templateUrl: './create-stock2.component.html',
  styleUrls: ['./create-stock2.component.css']
})
export class CreateStock2Component {

  public stock: Stock2;
  public confirmed = false;
  public message = '';
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: Stock2Service) {
    this.initializeStock();
  }

  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
        .subscribe((result: any) => {
          this.message = result.msg;
          this.initializeStock();
        }, (err) => {
          this.message = err.error.msg;
        });
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
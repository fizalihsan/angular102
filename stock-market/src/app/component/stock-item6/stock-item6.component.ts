import { Component, OnInit } from '@angular/core';
import {Stock} from 'src/app/model/stock'

@Component({
  selector: 'app-stock-item6',
  templateUrl: './stock-item6.component.html',
  styleUrls: ['./stock-item6.component.css']
})
export class StockItem6Component implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('IBM', 'IBM', 100, 90),
      new Stock('Microsoft', 'MSFT', 120, 60),
      new Stock('APPLE', 'APPL', 70, 90),
    ];
  }

  public toggleFavorite(event, index) {
    console.log(`We are toggling the favorite state for stock: ${this.stocks[index].code} at position ${index}`, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

}

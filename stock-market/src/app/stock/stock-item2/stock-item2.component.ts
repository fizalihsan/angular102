import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item2',
  templateUrl: './stock-item2.component.html',
  styleUrls: ['./stock-item2.component.css']
})

// implements interface OnInit to customize component initialization
export class StockItem2Component implements OnInit {

  // class member variables
  public stock: Stock;

  title = 'stock item 2'

  constructor() { }

  // gets invoked when a component is initialized - after the component is created by the Angular framework, after all the data is initialized.
  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 95, 80);
  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}

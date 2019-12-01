import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item5',
  templateUrl: './stock-item5.component.html',
  styleUrls: ['./stock-item5.component.css']
})
export class StockItem5Component implements OnInit {

  // class member variables
  public stock: Stock;

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

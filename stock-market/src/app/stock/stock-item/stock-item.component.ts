import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

// implements interface OnInit to customize component initialization
export class StockItemComponent implements OnInit {

  // class member variables
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  title = 'stock item'

  constructor() { }

  // gets invoked when a component is initialized - after the component is created by the Angular framework, after all the data is initialized.
  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.favorite = !this.favorite;
  }
}

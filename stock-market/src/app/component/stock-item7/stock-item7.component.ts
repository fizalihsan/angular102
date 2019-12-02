import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item7',
  templateUrl: './stock-item7.component.html',
  styleUrls: ['./stock-item7.component.css']
})
export class StockItem7Component implements OnInit {

  //responsible for receiving the value of the stocks from the parent component 
  //and just rendering the data.
  @Input() public stocks: Array<Stock>;
  @Output() public toggleFavoriteEmitter: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
    // this.stocks = [
    //   new Stock('IBM', 'IBM', 100, 90),
    //   new Stock('Microsoft', 'MSFT', 120, 60),
    //   new Stock('APPLE', 'APPL', 70, 90),
    // ];
  }

  public onToggleFavorite(event, index: Number) {
    // console.log(`We are toggling the favorite state for stock: ${this.stocks[index].code} at position ${index}`, event);
    // this.stocks[index].favorite = !this.stocks[index].favorite;
    // this.toggleFavorite.emit({"stocks": this.stocks, "index": index});
    console.log('did something', index);
    this.toggleFavoriteEmitter.emit(index);
  }

}

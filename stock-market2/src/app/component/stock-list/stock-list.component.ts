import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks: Stock[];
  constructor(private stockService: StockService) { }

  ngOnInit() {
    // Version 1
    // this.stocks = [
    //   new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
    //   new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
    //   new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    // ];

    // Version 2
    // this.stocks = this.stockService.getStocks();

    // Version 3
    this.stockService.getStocks().subscribe(stocks => {this.stocks = stocks;});
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    // stock.favorite = !stock.favorite;
    this.stockService.toggleFavorite(stock);
  }

}

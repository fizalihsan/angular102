import { Component, OnInit, Input } from '@angular/core';

import { Stock2 } from '../../model/stock2';
import { Stock2Service } from 'src/app/services/stock2.service';

@Component({
  selector: 'app-stock-item2',
  templateUrl: './stock-item2.component.html',
  styleUrls: ['./stock-item2.component.css']
})
export class StockItem2Component {

  @Input() public stock: Stock2;

  constructor(private stockService: Stock2Service) { }

  onToggleFavorite(event) {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }
}
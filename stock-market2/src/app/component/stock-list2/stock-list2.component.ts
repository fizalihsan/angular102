import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock2 } from 'src/app/model/stock2';
import { Stock2Service } from 'src/app/services/stock2.service';

@Component({
  selector: 'app-stock-list2',
  templateUrl: './stock-list2.component.html',
  styleUrls: ['./stock-list2.component.css']
})
export class StockList2Component implements OnInit {

  public stocks$: Observable<Stock2[]>;
  constructor(private stockService: Stock2Service) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

}

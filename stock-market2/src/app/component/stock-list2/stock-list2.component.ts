import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock2 } from 'src/app/model/stock2';
import { Stock2Service } from 'src/app/services/stock2.service';
import { AuthService } from 'src/app/services/auth.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-stock-list2',
  templateUrl: './stock-list2.component.html',
  styleUrls: ['./stock-list2.component.css']
})
export class StockList2Component implements OnInit {

  public stocks$: Observable<Stock2[]>;
  public searchString: string = '';

  constructor(private stockService: Stock2Service, 
            private authService: AuthService) { }

  ngOnInit() {
    // this.stocks$ = this.stockService.getStocks();
    this.fetchStocks();

    this.stockService.getStocksAsResponse()
      .subscribe((response) => {
        console.log('OBSERVE "response" RESPONSE is ', response);
      });

    this.stockService.getStocksAsEvents()
      .subscribe((response) => {
        console.log('OBSERVE "events" RESPONSE is ', response);
      });

    this.stockService.getStocksAsString()
      .subscribe((response) => {
        console.log('Response Type "text" RESPONSE is ', response);
      });

    this.stockService.getStocksAsBlob()
      .subscribe((response) => {
        console.log('Response Type "blob" RESPONSE is ', response);
      });
  }

  fetchStocks(){
    this.stocks$ = this.stockService.getStocks(this.searchString)
                  .pipe(share()); // hot observable reusing producer
  }

  search(){
    this.fetchStocks();
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe(
      (res) => console.log('Successfully made failing call', res),
      (err) => console.error('Error making failing call', err));
  }

}

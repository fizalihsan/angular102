import { Injectable } from '@angular/core';
import { Stock2 } from '../model/stock2';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Stock2Service {

  constructor(private http: HttpClient) {  }

  getStocks(): Observable<Stock2[]> {
    return this.http.get<Stock2[]>('/api/stock');
  }

  createStock(stock: Stock2): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock2): Observable<Stock2> {
    return this.http.patch<Stock2>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
  }
}

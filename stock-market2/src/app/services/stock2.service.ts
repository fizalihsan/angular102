import { Injectable } from '@angular/core';
import { Stock2 } from '../model/stock2';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable()
export class Stock2Service {

  constructor(private http: HttpClient) {  }

  getStocks(query: string): Observable<Stock2[]> {
    return this.http.get<Stock2[]>('/api/stock?q=${query}');
  }

  getStocksWithHeadersParams(): Observable<Stock2[]> {
    return this.http.get<Stock2[]>('/api/stock', {
      headers: new HttpHeaders()
          .set('Authorization', 'MyAuthorizationHeaderValue')
          .set('X-EXAMPLE-HEADER', 'TestValue'),
      params: {
        q: 'test',
        test: 'value'
      },
      observe: 'body'
    });
  }

  /**
   * returns body along with other HTTP request fields like status, headers, etc
   */
  getStocksAsResponse(): Observable<HttpResponse<Stock2[]>> {
    return this.http.get<Stock2[]>('/api/stock', {
      observe: 'response'
    });
  }

  /**
   * get multiple instances of Http​Event that are not just the response, but also progress, initialization, etc. 
   * Thus the format of the response is not defined.
   */
  getStocksAsEvents(): Observable<HttpEvent<any>> {
    return this.http.get<Stock2[]>('/api/stock', {
      observe: 'events'
    });
  }

  /**
   * useful for working with non-JSON APIs
   */
  getStocksAsString(): Observable<string> {
    return this.http.get('/api/stock', {
      responseType: 'text'
    });
  }

  /**
   * useful for working with binary data APIs
   */
  getStocksAsBlob(): Observable<Blob> {
    return this.http.get('/api/stock', {
      responseType: 'blob'
    });
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

  /**
   * Test method which always returns 403 failure response
   */
  makeFailingCall() {
    return this.http.get('/api/fail');
  }
}

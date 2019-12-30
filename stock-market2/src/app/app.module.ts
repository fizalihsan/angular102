import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { StockItemComponent } from './component/stock-item/stock-item.component';
import { StockService } from './services/stock.service';
import { CreateStockComponent } from './component/create-stock/create-stock.component';
import { MessageService } from './services/message.service';
import { StockList2Component } from './component/stock-list2/stock-list2.component';
import { StockItem2Component } from './component/stock-item2/stock-item2.component';
import { CreateStock2Component } from './component/create-stock2/create-stock2.component';
import { Stock2Service } from './services/stock2.service';
import { AuthService } from './services/auth.service';
import { StockAppInterceptor } from './interceptors/stock-app.interceptor';
import { StockAuthInterceptor } from './interceptors/stock-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    CreateStockComponent,
    StockList2Component,
    StockItem2Component,
    CreateStock2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StockService,
    Stock2Service,
    MessageService,
    AuthService,
    //adding an interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StockAppInterceptor,
      multi: true, // the fact that it is an array of interceptors
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StockAuthInterceptor,
      multi: true, // the fact that it is an array of interceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

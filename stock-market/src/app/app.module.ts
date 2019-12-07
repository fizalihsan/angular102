import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockItemComponent } from './component/stock-item/stock-item.component';
import { StockItem2Component } from './component/stock-item2/stock-item2.component';
import { StockItem3Component } from './component/stock-item3/stock-item3.component';
import { StockItem4Component } from './component/stock-item4/stock-item4.component';
import { StockItem5Component } from './component/stock-item5/stock-item5.component';
import { StockItem6Component } from './component/stock-item6/stock-item6.component';
import { StockItem7Component } from './component/stock-item7/stock-item7.component';
import { CreateStockComponent } from './component/create-stock/create-stock.component';
import { CreateStock2Component } from './component/create-stock2/create-stock2.component';
import { CreateStock3Component } from './component/create-stock3/create-stock3.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockItem2Component,
    StockItem3Component,
    StockItem4Component,
    StockItem5Component,
    StockItem6Component,
    StockItem7Component,
    CreateStockComponent,
    CreateStock2Component,
    CreateStock3Component
  ],
  imports: [
    BrowserModule,
    FormsModule // without this, 'ngModel' will be an unknown property on 'input'.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

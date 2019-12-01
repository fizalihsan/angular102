import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './component/stock-item/stock-item.component';
import { StockItem2Component } from './component/stock-item2/stock-item2.component';
import { StockItem3Component } from './component/stock-item3/stock-item3.component';
import { StockItem4Component } from './component/stock-item4/stock-item4.component';
import { StockItem5Component } from './component/stock-item5/stock-item5.component';
import { StockItem6Component } from './component/stock-item6/stock-item6.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockItem2Component,
    StockItem3Component,
    StockItem4Component,
    StockItem5Component,
    StockItem6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

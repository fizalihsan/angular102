import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CreateStock4Component } from './component/create-stock4/create-stock4.component';
import { ProductTestComponent } from './component/product-test/product-test.component';
import { StockItem8Component } from './component/stock-item8/stock-item8.component';
import { StockItem9Component } from './component/stock-item9/stock-item9.component';
import { StockItem10Component } from './component/stock-item10/stock-item10.component';
import { StockItem11Component } from './component/stock-item11/stock-item11.component';
import { StockItem12Component } from './component/stock-item12/stock-item12.component';
import { StockItem13Component } from './component/stock-item13/stock-item13.component';

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
    CreateStock3Component,
    CreateStock4Component,
    ProductTestComponent,
    StockItem8Component,
    StockItem9Component,
    StockItem10Component,
    StockItem11Component,
    StockItem12Component,
    StockItem13Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // without this, 'ngModel' will be an unknown property on 'input'.
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

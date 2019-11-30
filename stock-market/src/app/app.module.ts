import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockItem2Component } from './stock/stock-item2/stock-item2.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockItem2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

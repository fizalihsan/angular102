import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './component/stock-item/stock-item.component';
import { StockItem2Component } from './component/stock-item2/stock-item2.component';

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

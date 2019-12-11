import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { StockItemComponent } from './component/stock-item/stock-item.component';
import { StockService } from './services/stock.service';
import { CreateStockComponent } from './component/create-stock/create-stock.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StockService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

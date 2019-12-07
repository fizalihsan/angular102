import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-stock4',
  templateUrl: './create-stock4.component.html',
  styleUrls: ['./create-stock4.component.css']
})
export class CreateStock4Component {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  }

  createStock(stockForm: NgForm) {
    console.log('Stock form', stockForm);
    this.stock = stockForm.value.stock; // copying stock values from the form
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
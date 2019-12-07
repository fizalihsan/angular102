import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock2',
  templateUrl: './create-stock2.component.html',
  styleUrls: ['./create-stock2.component.css']
})
export class CreateStock2Component implements OnInit {

  public stock: Stock;
  constructor() {
    this.stock = new Stock('test', '', 0, 0);
  }

  ngOnInit() {
  }

}

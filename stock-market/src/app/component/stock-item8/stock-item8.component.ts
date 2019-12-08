import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-item8',
  templateUrl: './stock-item8.component.html',
  styleUrls: ['./stock-item8.component.css']
})
export class StockItem8Component implements OnInit {

  public nameControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Name Control Value = ', this.nameControl.value);
  }
}

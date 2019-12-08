import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-item9',
  templateUrl: './stock-item9.component.html',
  styleUrls: ['./stock-item9.component.css']
})
export class StockItem9Component implements OnInit {

  public stockForm = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
    }
  );
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Stock Form Value', this.stockForm.value);
  }
}

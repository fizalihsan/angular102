import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-item10',
  templateUrl: './stock-item10.component.html',
  styleUrls: ['./stock-item10.component.css']
})
export class StockItem10Component implements OnInit {

  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}

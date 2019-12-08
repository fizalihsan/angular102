import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-item11',
  templateUrl: './stock-item11.component.html',
  styleUrls: ['./stock-item11.component.css']
})
export class StockItem11Component implements OnInit {

  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // convenience methods to avoid repeating `stockForm.get()` in the template
  get code() { return this.stockForm.get('code'); }
  get price(){ return this.stockForm.get('price');}

  ngOnInit() {
  }

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }

  resetForm(){
    this.stockForm.reset();
  }
}

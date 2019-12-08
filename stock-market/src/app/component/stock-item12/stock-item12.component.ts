import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

let counter = 1;

@Component({
  selector: 'app-stock-item12',
  templateUrl: './stock-item12.component.html',
  styleUrls: ['./stock-item12.component.css']
})

export class StockItem12Component implements OnInit {

  private stock: Stock;
  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.stock = new Stock('Test ' + counter++, 'TST', 20, 10);
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  /**
  * set values from stock object to form via setValue()
  */
  loadStockFromServer() {
    this.stock = new Stock('Test ' + counter++, 'TST', 20, 10);
    let stockFormModel = Object.assign({}, this.stock); //copy over the contents of 'stock'
    //delete the 'stock' properties which are not in the form. Otherwise setValue() throws error
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite; 
    this.stockForm.setValue(stockFormModel);
  }

  /**
   * set values from stock object to form via patchValue()
   */
  patchStockForm() {
    this.stock = new Stock(`Test ${counter++}`, 'TST', 20, 10);
    //same functionality as loadStockFromServer(), but patchValue() ignores properties not found in form, unlike setValue()
    this.stockForm.patchValue(this.stock);
  }

  // convenience methods to avoid repeating `stockForm.get()` in the template
  get code() { return this.stockForm.get('code'); }
  get price() { return this.stockForm.get('price'); }

  ngOnInit() {
  }

  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Stock Form Value', this.stockForm.value);
  }

  resetForm() {
    this.stockForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item13',
  templateUrl: './stock-item13.component.html',
  styleUrls: ['./stock-item13.component.css']
})

export class StockItem13Component implements OnInit {

  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notablePeople: this.fb.array([])
    });
  }

  // convenience methods to avoid repeating `stockForm.get()` in the template
  get code() { return this.stockForm.get('code'); }
  get price() { return this.stockForm.get('price'); }
  get notablePeople(): FormArray {
    return this.stockForm.get('notablePeople') as FormArray;
  }

  addNotablePerson() {
    this.notablePeople.push(this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required]
    }))
  }

  removeNotablePerson(index: number) {
    this.notablePeople.removeAt(index);
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.stock = Object.assign({}, this.stockForm.value);
    console.log('Stock Form Value', this.stockForm.value);
  }

  resetForm() {
    this.stockForm.reset();
  }
}

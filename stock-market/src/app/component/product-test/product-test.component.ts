import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit {

  product: Product;
  constructor() { }

  ngOnInit() {
  }

  save(productForm){
    console.log(productForm);

    this.product = productForm.value.product;
    console.log(this.product);
    if (productForm.valid){
      console.log("Product added successfully!!!");
    } else {
      console.log("Failure validating the product!!!");
    }
    
  }
}

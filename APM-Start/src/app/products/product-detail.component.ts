import { Component, OnInit } from '@angular/core';

@Component({
  // selector only required if its nested in another component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

import { IProducts } from '../../../models/Products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  public products: IProducts;

  constructor( private productsService: ProductsService, private router: Router ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
        .subscribe(
          resp => {
            console.log(resp);
            this.products = resp;
          },
          err => console.error(err)
        );
  }

  onProductClick( product: IProducts ) {
    // console.log(product._id);
    this.router.navigate(['/product', product._id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProductsService } from '../../../services/products.service';

import { IProducts } from '../../../models/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  private id: string;
  public product: IProducts;

  constructor(
      private productService: ProductsService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.productService.getProductById(this.id)
          .subscribe(
            res => {
              this.product = res;
              console.log(this.product);
            },
            err => console.error(err)
          );
    });
  }

  onRegresar() {
    this.location.back();
  }

}

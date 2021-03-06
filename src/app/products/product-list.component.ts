import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.products = data.products;
      this.route.queryParamMap.subscribe(params => {
        this.listFilter = params.get('filterBy') || '';
        this.showImage = params.get('showImage') === 'true';
      });
      this.filteredProducts = this.performFilter(this.listFilter);
    });
    // this.productService.getProducts().subscribe({
    //   next: products => {
    //     this.products = products;
    //     this.route.queryParamMap.subscribe(params => {
    //       this.listFilter = params.get('filterBy') || '';
    //       this.showImage = params.get('showImage') === 'true';
    //     });
    //     this.filteredProducts = this.performFilter(this.listFilter);
    //   },
    //   error: err => this.errorMessage = err
    // });
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}

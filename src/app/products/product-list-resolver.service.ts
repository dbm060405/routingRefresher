import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolverService implements Resolve<Array<Product>> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Product>> {
    return this.productService.getProducts();
  }
}

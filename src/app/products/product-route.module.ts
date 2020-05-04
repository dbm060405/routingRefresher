import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductResolver} from './product-resolver.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, resolve: {resolvedData: ProductResolver}},
      {path: 'products/:id/edit', component: ProductEditComponent, resolve: {resolvedData: ProductResolver}}
    ])
  ],
  exports: [RouterModule]
})
export class ProductRouteModule {
}

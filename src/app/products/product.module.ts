import {NgModule} from '@angular/core';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProductRouteModule} from './product-route.module';
import {ProductResolver} from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRouteModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule {
}

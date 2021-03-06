import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersRoutingModule } from './orders/orders-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders-routing.module#OrdersRoutingModule'
  },
  {
    path: 'products',
    loadChildren: 'app/products/products-routing.module#ProductsRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

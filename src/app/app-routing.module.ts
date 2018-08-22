import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DishesComponent} from './dishes/dishes.component';
import {ProductsComponent} from './products/products.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
{ path: 'dishes', component: DishesComponent},
{ path: 'products', component: ProductsComponent},
{ path: 'settings', component: SettingsComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

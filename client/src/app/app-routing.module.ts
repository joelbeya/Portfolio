import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersListComponent} from "./customers-list/customers-list.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {SearchCustomerComponent} from "./search-customer/search-customer.component";

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

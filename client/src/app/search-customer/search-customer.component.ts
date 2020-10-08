import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  age: number;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  private searchCustomers(): void {
    this.customerService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  onSubmit(): void {
    this.searchCustomers();
  }
}

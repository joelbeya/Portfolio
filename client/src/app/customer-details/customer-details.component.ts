import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {CustomersListComponent} from "../customers-list/customers-list.component";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(
    private customerService: CustomerService,
    private customersListComponent: CustomersListComponent
  ) { }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(
      this.customer.id,
      {
        name: this.customer.name,
        age: this.customer.age,
        active: isActive
      }
    ).subscribe(
      data => {
        console.log(data);
        this.customer = data as Customer;
      },
      error => console.log(error)
    );
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.customersListComponent.reloadData();
        },
        error => console.log(error)
      );
  }
}

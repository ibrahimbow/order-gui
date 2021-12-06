import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer-model/customer';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  customers : Customer[]= [];

  
  constructor(private customerService: CustomerServiceService) { 
   
  }

  ngOnInit(): void {
    this.getItems();

  }

  getItems(): void {
    this.customerService.getCustomers()
    .subscribe(res => this.customers = res);
  }

}

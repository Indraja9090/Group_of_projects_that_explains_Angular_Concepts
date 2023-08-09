import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

/*Initially when this webpage will be loaded the `selectedCustomer` property will be `null` as we not assigned any value to it*/
  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'Ibaad', address: ' ', city: 'punjab', country:'UK'},
    {customerNo: 2, name: 'John Smith', address: ' ', city: 'New York', country:'USA'},
    {customerNo: 3, name: 'Merry Ann', address: ' ', city: 'Berlin', country:'Germany'},
    {customerNo: 4, name: 'Rajesh Khatri', address: ' ', city: 'Mumbai', country:'India'},
    {customerNo: 5, name: 'Rahul Raj', address: ' ', city: 'Delhi', country:'India'}
  ]

}

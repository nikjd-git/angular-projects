import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Shared/interfaces';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  title: string= '';
  people!: any[];

  constructor() 
  { }

  ngOnInit(): void {
    this.title = 'Customers';
   //this.dataService.getCustomers().subscribe((customers: ICustomer[]) => this.people = customers);
    this.people = [
     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
     {id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
  ];
  }

}

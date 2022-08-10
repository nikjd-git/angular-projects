import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { ICustomer, IOrder, IOrderItem  } from 'src/app/Shared/interfaces';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: IOrder[] = [];
  customer!: ICustomer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }


}

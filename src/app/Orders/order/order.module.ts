import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/Shared/shared.module';
import { OrderComponent } from './order.component';
import { OrdersRoutingModule } from './order-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule, RouterModule ],
    declarations: [ OrderComponent ]
})
export class OrdersModule { }
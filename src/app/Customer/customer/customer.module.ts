import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component'
import { FilterTextboxComponent } from './customer-list/filter-textbox.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CustomersListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomerComponent,CustomersListComponent,FilterTextboxComponent],
  imports: [
    CommonModule, SharedModule, FormsModule, CustomersRoutingModule
  ],
  exports: [CustomerComponent]
})
export class CustomerModule { }

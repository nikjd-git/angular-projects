import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './Customer/customer/customer.module';
import { SharedModule } from './Shared/shared.module';
import { OrdersModule } from './Orders/order/order.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      CustomerModule,
      OrdersModule,
      AppRoutingModule, // brought this down
      SharedModule,
      CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

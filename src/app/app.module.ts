
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateNewItemComponent } from './item-control-panel/create-new-item/create-new-item.component';
import { UpdateItemComponent } from './item-control-panel/update-item/update-item.component';
import { ViewItemDetailsComponent } from './item-control-panel/view-item-details/view-item-details.component';

import { CreateCustomerComponent } from './customer-control-panel/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer-control-panel/update-customer/update-customer.component';
import { ViewCustomerDetailsComponent } from './customer-control-panel/view-customer-details/view-customer-details.component';
import { CustomerOverviewComponent } from './customer-control-panel/customer-overview/customer-overview.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    FilterPipe,
    DashboardComponent,

    CreateNewItemComponent,
    UpdateItemComponent,
    ViewItemDetailsComponent,
    
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ViewCustomerDetailsComponent,
    CustomerOverviewComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

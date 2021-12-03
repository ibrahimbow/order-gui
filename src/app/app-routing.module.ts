
import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateCustomerComponent } from './customer-control-panel/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer-control-panel/update-customer/update-customer.component';
import { ViewCustomerDetailsComponent } from './customer-control-panel/view-customer-details/view-customer-details.component';


import { CreateNewItemComponent } from './item-control-panel/create-new-item/create-new-item.component';
import { UpdateItemComponent } from './item-control-panel/update-item/update-item.component';
import { ViewItemDetailsComponent } from './item-control-panel/view-item-details/view-item-details.component';
import { CustomerOverviewComponent } from './customer-control-panel/customer-overview/customer-overview.component';



const routes: Routes = [
{ path: '', component: ItemsComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: '', redirectTo: '/', pathMatch: 'full' },


 { path: 'createNewItems', component:  CreateNewItemComponent },
 { path: 'updateItem', component:  UpdateItemComponent },
 { path: 'viewItemDetails/:id', component:  ViewItemDetailsComponent },


{ path: 'customerOverview', component:  CustomerOverviewComponent }, 
{ path: 'createCustomer', component:  CreateCustomerComponent },
 { path: 'updateCustomer', component:  UpdateCustomerComponent },
 { path: 'viewCustomerDetails', component:  ViewCustomerDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

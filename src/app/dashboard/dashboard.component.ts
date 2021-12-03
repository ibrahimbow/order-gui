import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filteredString: string ;

  selectedItem?: Item;
  items : Item[]= [];



  
  constructor(private itemService: ItemService,private route: ActivatedRoute,  private router: Router) { 
    this.filteredString = '';
  
  }

  ngOnInit(): void {
    this.getItems();
    
   
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

}



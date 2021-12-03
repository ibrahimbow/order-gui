import { ItemService } from '../item.service';
import { Item } from '../item';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  filteredString: string ;

  items : Item[]= [];

  
  constructor(private itemService: ItemService) { 
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

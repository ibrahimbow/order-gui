import { Item } from './../../item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.css']
})
export class ViewItemDetailsComponent implements OnInit {


  private _item: Item | any;

  itemId : string | any ;


  updateItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: '',
  });




  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {

  }



  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['id'];
    this.itemService.findItemById(this.itemId)
      .subscribe(item => this._item = item);
  }


  get item() {
    return this._item;
  }



  update(): void {
      this.itemService.updateItem(this.updateItemForm.value , this.itemId)
        .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}

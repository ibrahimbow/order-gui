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


  private _item: Item | undefined;



  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {

  }



  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.findItemById(id)
      .subscribe(item => this._item = item);
  }


  get item() {
    return this._item;
  }



  update(): void {
    if (this.item) {
      this.itemService.updateItem(this.item)
        .subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }
}

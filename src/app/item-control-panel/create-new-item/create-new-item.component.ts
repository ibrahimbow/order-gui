import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.css']
})
export class CreateNewItemComponent implements OnInit {
  private numleft: any;
  private txt : any;
  private submit: any;
  
  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: '',
  });





  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.txt = document.getElementById('descripe');
    this.numleft = document.getElementById('numleft');
    this.submit = document.getElementById('submit');
  this.txt.oninput = this.showComment;
  }

  gotoItems() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    this.itemService.addNewItem(this.createItemForm.value).subscribe(data => {
      console.log('items is added', data);
      this.gotoItems();
    });
  }


  showComment(): any {
    this.submit.disabled = ((this.numleft.textContent = 255 - this.txt.value.length) == 0);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Items } from '../interfaces/item.interface';
import { ItemsService } from '../services/item/items.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  created_item: any;
  item_name: any;
  item_description: any;
  errorMessage: any;
  bucketlist_id: any;
  response_message: any;
  sub_rout: any;

  constructor(private _itemService: ItemsService, private _route: ActivatedRoute) { }

  ngOnInit() {
      this._route.params.subscribe( params => {
          this.bucketlist_id = params['bucket_id'];
        }
      );
  }
  createItem(bucketlist_id: any) {
    this._itemService.createItem(bucketlist_id, this.item_name, this.item_description).subscribe(
      response => { this.created_item = response;
          console.log(this.created_item);
          if (this.created_item.STATUS === 'success') {
            this.ngOnInit();
            this.response_message = 'Item ' + this.item_name + ' created';
            this.item_name = '';
            this.item_description = '';
          }else {
            this.ngOnInit();
            this.response_message = 'Error creating item';
            this.item_name = '';
            this.item_description = '';
          }
        },
      error => this.errorMessage = <any> error
    );
  }
}

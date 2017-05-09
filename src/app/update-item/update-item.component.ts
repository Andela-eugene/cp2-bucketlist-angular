import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Items } from '../interfaces/item.interface';
import { ItemsService } from '../services/item/items.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  item: Items;
  item_name: any;
  item_description: any;
  errorMessage: any;
  bucketlist_id: any;
  item_id: any;
  sub_rout: any;

  constructor(private _itemService: ItemsService, private _route: ActivatedRoute) { }

  ngOnInit() {
      this._route.params.subscribe( params => {
          this.bucketlist_id = params['bucket_id'];
          this.item_id = params['item_id'];
          this.getItem(this.bucketlist_id, this.item_id);
        }
      );
  }

  getItem(bucketlist_id: any, item_id: any) {
    this._itemService.getItemByID(bucketlist_id, item_id).subscribe(
      items => {this.item = items[0];
          this.item_name = this.item.item_name;
          this.item_description = this.item.description;
        },
      error => this.errorMessage = <any> error
    );
  }
}

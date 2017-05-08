import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Items } from '../interfaces/item.interface';
import { ItemsService } from '../services/item/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Items[];
  errorMessage: any;
  bucketlist_id: number;
  sub_rout: any;

  constructor(private _itemService: ItemsService, private _route: ActivatedRoute) { }

  ngOnInit() {
      this._route.params.subscribe( params => {
          this.bucketlist_id = params['bucketlist_id'];
          this.getAllItems(this.bucketlist_id);
        }
      );
  }

  getAllItems(bucketlist_id: any) {
    this._itemService.getAllItems(bucketlist_id).subscribe(
      items => {this.allItems = items;
          console.log(items);
          console.log(this.allItems);
        },
      error => this.errorMessage = <any> error
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private _itemService: ItemsService,
              private _activeRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
      this._activeRoute.params.subscribe( params => {
          this.bucketlist_id = params['bucketlist_id'];
          this.getItems(this.bucketlist_id);
        }
      );
  }

  getItems(bucketlist_id: any) {
    this._itemService.getAllItems(bucketlist_id).subscribe(
      items => {this.allItems = items;
          console.log(this.allItems);
        },
      error => this.errorMessage = <any> error
    );
  }
  redirectToUpdateItems(bucket_id, item_id) {
    this._router.navigate(['/item_update', bucket_id, item_id]);
  }

}

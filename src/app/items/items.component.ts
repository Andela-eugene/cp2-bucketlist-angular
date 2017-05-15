import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Items } from '../interfaces/item.interface';
import { ItemsService } from '../services/item/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Items[];
  pageItems: Items[] = [];
  errorMessage: any;
  bucketlist_id: number;
  resonse_json: any;
  sub_rout: any;
  page_number: any;
  no_pages: number[];
  page_response: any;
  item_response_message: string;

  constructor(private _itemService: ItemsService,
              private _activeRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
      this.sub_rout = this._activeRoute.params.subscribe( params => {
          this.bucketlist_id = params['bucketlist_id'];
          this.page_number = params['page_no'];
          // this.getItems(this.bucketlist_id);
          this.getPage(this.bucketlist_id, this.page_number);
        }
      );
  }
  updateItem(item_id: any, item_done: any, item_name: any, item_description: any) {
    this._itemService.updateItem(item_id, item_done, item_name, item_description).subscribe(
      response => {
        this.resonse_json = response;
        console.log(this.resonse_json);
        if (this.resonse_json.STATUS === 'success') {
          this.ngOnInit();
          this.item_response_message = 'Item updated';
        }else {
          this.ngOnInit();
          this.item_response_message = 'Error occured updating the bucketlist';
        }
      },
      error => this.errorMessage = <any> error
    );
  }
  deletItem(item_id: any) {
    this._itemService.deleteItem(item_id).subscribe(
      response => {
        this.resonse_json = response;
        this.ngOnInit();
        this.item_response_message = 'Bucketlist deleted';
      },
      error => this.errorMessage = <any> error
    );
  }
  getPage(bucket_id, page_no) {
    this._itemService.getPagedItems(bucket_id, page_no).subscribe(
      response => {
        this.page_response = response;
        this.pageItems = this.page_response.bucketlist_item;
        this.no_pages = this.page_response.pages;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BucketlistService } from '../services/bucketlist/bucketlist.service';
import { Bucketlist } from '../interfaces/bucketlist.interface';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  allBucketlists: Bucketlist[];
  deleted: any;
  errorMessage: any;
  response_message: string;
  page_response: any;
  pageBucket: any = [];
  no_pages: any;

  constructor(private _bucketlistService: BucketlistService, private _router: Router) { }

  ngOnInit() {
    this.getPaged(1);
  }
  deleteBucketlist(bucket_id) {
    this._bucketlistService.deleteBucket(bucket_id).subscribe(
      response => {this.deleted = response;
        if (this.deleted.STATUS === 'Success') {
          this.response_message = 'Bucketlist deleted';
        }else {
          this.response_message = 'Error: bucketlist not deleted';
        }
      },
      error => this.errorMessage = <any> error
    );
  }
  getPaged(page_no) {
    this._bucketlistService.getPagedBucketlist(page_no).subscribe(
      response => {
        this.page_response = response;
        this.pageBucket = this.page_response.bucketlists;
        this.no_pages = this.page_response.pages;
      }
    );
  }

  redirectToItems(bucket_id, page_no) {
    this._router.navigate(['/bucketlist', bucket_id, 'page', page_no]);
  }
  redirectToBucket(bucket_id) {
    this._router.navigate(['/bucket_update', bucket_id]);
  }
}

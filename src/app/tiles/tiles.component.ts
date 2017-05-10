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

  constructor(private _bucketlistService: BucketlistService, private _router: Router) { }

  ngOnInit() {
    this.getAllBucketlist();
  }
  getAllBucketlist() {
    this._bucketlistService.getAllBucketlist().subscribe(
        bucketlists => {this.allBucketlists = bucketlists;
      },
      error => this.errorMessage = <any> error
    );
  }
  deleteBucketlist(bucket_id) {
    this._bucketlistService.deleteBucket(bucket_id).subscribe(
      response => {this.deleted = response;
        if (this.deleted.STATUS === 'Success') {
          this.response_message = 'Bucketlist deleted';
        }else {
          this.response_message = 'Error: bbucketlist not deleted';
        }
      },
      error => this.errorMessage = <any> error
    );
  }

  redirectToItems(bucket_id) {
    this._router.navigate(['/bucketlist', bucket_id]);
  }
  redirectToBucket(bucket_id) {
    this._router.navigate(['/bucket_update', bucket_id]);
  }
}

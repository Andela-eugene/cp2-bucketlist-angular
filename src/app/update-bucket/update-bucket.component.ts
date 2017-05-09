import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bucketlist } from '../interfaces/bucketlist.interface';
import { BucketlistService } from '../services/bucketlist/bucketlist.service';

@Component({
  selector: 'app-update-bucket',
  templateUrl: './update-bucket.component.html',
  styleUrls: ['./update-bucket.component.css']
})
export class UpdateBucketComponent implements OnInit {
  bucket: Bucketlist;
  errorMessage: any;
  bucketlist_id: any;
  name: any;
  sub_rout: any;

  constructor(private _bucketService: BucketlistService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
        this.bucketlist_id = params['bucket_id'];
        this.getBucket(this.bucketlist_id);
      }
    );
  }

  getBucket(bucket_id) {
    this._bucketService.getBucketByID(bucket_id).subscribe(
        bucketlist => {this.bucket = bucketlist[0];
        this.name = this.bucket.bucketlist_name;
        console.log(this.bucket);
      },
      error => this.errorMessage = <any> error
    );
  }

}

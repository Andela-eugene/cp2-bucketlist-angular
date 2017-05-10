import { Component, OnInit } from '@angular/core';

import { BucketlistService } from '../services/bucketlist/bucketlist.service';

@Component({
  selector: 'app-create-bucketlist',
  templateUrl: './create-bucketlist.component.html',
  styleUrls: ['./create-bucketlist.component.css']
})
export class CreateBucketlistComponent implements OnInit {
  created_bucket: any;
  response_message: string;
  bucket_name: any;

  constructor(private _bucketlistService: BucketlistService) { }

  ngOnInit() {
  }
  createBucketlist() {
    this._bucketlistService.createBucket(this.bucket_name).subscribe(
      response => {
        this.created_bucket = response;
        console.log(this.created_bucket);
         if (this.created_bucket.STATUS === 'success') {
            this.response_message = 'Item ' + this.bucket_name + ' created';
          }else {
            this.response_message = 'Error creating item';
          }
      }
    );
  }
}

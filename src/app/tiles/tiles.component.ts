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
  errorMessage: any;

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

  redirectToItems(bucket_id) {
    this._router.navigate(['/bucketlist', bucket_id]);
  }
}

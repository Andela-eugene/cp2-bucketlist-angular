import { Component, OnInit } from '@angular/core';

import { BucketlistService } from '../services/bucketlist/bucketlist.service';
import { Bucketlist } from '../interfaces/bucketlist.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allSearchBucketlists: Bucketlist[];
  errorMessage: any;
  searchTerm: any;

  constructor(private _bucketlistService: BucketlistService) { }

  ngOnInit() {
  }
  searchBucketlist() {
    this._bucketlistService.searchBucketlist(this.searchTerm).subscribe(
        bucketlists => {this.allSearchBucketlists = bucketlists;
      },
      error => this.errorMessage = <any> error
    );
  }
}

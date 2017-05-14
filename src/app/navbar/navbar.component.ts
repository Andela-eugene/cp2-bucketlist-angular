import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BucketlistService} from '../services/bucketlist/bucketlist.service';
import {Bucketlist} from '../interfaces/bucketlist.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  allSearchBucketlists: Bucketlist[] = [];
  errorMessage: any;
  searchTerm: any;
  constructor(public router: Router,
              private _bucketlistService: BucketlistService, private _router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  searchBucketlist() {
    this.allSearchBucketlists = []
    this._bucketlistService.searchBucketlist(this.searchTerm).subscribe(
        bucketlists => {this.allSearchBucketlists = bucketlists;
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

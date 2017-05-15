import { Component, OnInit, Compiler } from '@angular/core';
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
              private _bucketlistService: BucketlistService,
              private _router: Router,
              private _compiler: Compiler) { }

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
  redirectToItems(bucket_id, page_no) {
    this._router.navigate(['/bucketlist', bucket_id, 'page', page_no]);
  }
  redirectToBucket(bucket_id) {
    this._router.navigate(['/bucket_update', bucket_id]);
  }
  logout() {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('user', '');
    this._compiler.clearCache();
  }
}

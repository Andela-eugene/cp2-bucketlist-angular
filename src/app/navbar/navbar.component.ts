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
              private _bucketlistService: BucketlistService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  searchBucketlist() {
    this._bucketlistService.searchBucketlist(this.searchTerm).subscribe(
        bucketlists => {this.allSearchBucketlists = bucketlists;
      },
      error => this.errorMessage = <any> error
    );
  }
}

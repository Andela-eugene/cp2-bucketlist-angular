import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  allBucketlists: any;
  errorMessage: any;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getAllBucketlist().subscribe(
      bucketlists => {this.allBucketlists = bucketlists;
          console.log(this.allBucketlists);
        },
      error => this.errorMessage = <any> error
    );
  }

}

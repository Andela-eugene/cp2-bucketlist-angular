import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login/login.service';
import { LoginInterface } from '../services/login/login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginResponse: LoginInterface;
  errorMessage: string;

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  getAllBucketlist() {
    this._loginService.getAllBucketlist()
      .subscribe(
        bucket_response => {}
      );
  }

  signIn() {
    this._loginService.login(this.username, this.password).subscribe(
      login_response => {this.loginResponse = login_response;
          console.log(this.loginResponse.STATUS);
          localStorage.setItem('TOKEN', this.loginResponse.TOKEN);
          if (this.loginResponse.STATUS === 'success') {
            this.router.navigate(['/bucketlist']);
          }
        },
      error => this.errorMessage = <any> error
    );
  }
}

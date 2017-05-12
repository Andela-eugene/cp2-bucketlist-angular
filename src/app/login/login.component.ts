import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginResponse: any;
  errorMessage: string;
  displayName: string;

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this._loginService.login(this.username, this.password).subscribe(
      login_response => {this.loginResponse = login_response;
          localStorage.setItem('TOKEN', this.loginResponse.TOKEN);
          if (this.loginResponse.STATUS === 'success') {
            localStorage.setItem('user', this.username);
            this.router.navigate(['/bucketlist']);
          }
        },
      error => this.errorMessage = <any> error
    );
  }
}

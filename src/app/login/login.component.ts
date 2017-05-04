import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login/login.service';
import { LoginInterface } from '../services/login/login.interface'


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

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  signIn() {
    this._loginService.login(this.username, this.password).subscribe(
      login_response => {this.loginResponse = login_response;
          console.log(this.loginResponse);
        },
      error => this.errorMessage = <any> error
    );
  }
}

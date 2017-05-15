import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  registerResponse: any;
  errorMessage: any;
  confirm: string;
  response_message: string;

  constructor(private _registerService: RegisterService, private _router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.confirm !== this.password) {
      this.response_message = 'Password mismatch';
    }else {
      this._registerService.register(this.first_name, this.last_name, this.email, this.username, this.password).subscribe(
        register_response => {this.registerResponse = register_response;
            if (this.registerResponse.STATUS === 'success') {
              this.response_message = 'Registration successful, navigate to login page to get started';
            }else {
              this.response_message = 'Error: Please check your login details and try again';
            }
          },
        error => this.errorMessage = <any> error
      );
    }
  }
}

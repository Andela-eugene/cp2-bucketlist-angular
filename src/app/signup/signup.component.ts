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

  constructor(private _registerService: RegisterService, private _router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.confirm !== this.password) {
      return this.errorMessage = 'Password mismatch';
    }
    this._registerService.register(this.first_name, this.last_name, this.email, this.username, this.password).subscribe(
      register_response => {this.registerResponse = register_response;
          if (this.registerResponse.STATUS === 'success') {
            this._router.navigate(['/login']);
          }
        },
      error => this.errorMessage = <any> error
    );
  }
}

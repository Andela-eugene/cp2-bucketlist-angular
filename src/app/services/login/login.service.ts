import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, Jsonp} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { LoginInterface } from '../../interfaces/login.interface';
// import { ErrorPagesComponent } from '../../shared/error-pages/error-pages.component';

@Injectable()
export class LoginService {
  body: any;
  header = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'TOKEN':  localStorage.getItem('TOKEN')
    };
  header_options = new RequestOptions(new Headers(this.header));
  url = 'http://127.0.0.1:5000';

  constructor(private _http: Http,
              private _router: Router) {}

  login(username: string, password: string): Observable<LoginInterface> {
    this.body = JSON.stringify({
      'username': username,
      'password': password
    });
    return this._http.post(`${this.url}/auth/login/`, this.body, this.header_options)
      .map((response: Response) => <LoginInterface> response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    if (error.status === 404) {
      this._router.navigate(['/404']);
      // this._errorPage.pageNotFound(error.status);
    } else if (error.status === 401) {
      this._router.navigate(['/401']);
    }
    return Observable.throw(message);
  }
}

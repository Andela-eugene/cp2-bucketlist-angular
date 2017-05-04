import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { LoginInterface } from './login.interface'

@Injectable()
export class LoginService {
  body: any;

  constructor(private _http: Http) {}

  login(username: string, password: string): Observable<LoginInterface> {
    const header = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    };
    const options = new RequestOptions(new Headers(header));

    this.body = JSON.stringify({
      'username': username,
      'password': password
    });
    return this._http.post('http://127.0.0.1:5000/auth/login/', this.body, options)
      .map((response: Response) => <LoginInterface> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

}

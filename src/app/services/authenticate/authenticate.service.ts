import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

import {Http, Response, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticateService implements CanActivate {
  url = 'http://127.0.0.1:5000';
  auth_json: any;
  auth_check: any;
  status: any;

  constructor(private _http: Http, private _route: Router) { }
  getHeader(): Headers {
    let head = new Headers();
    head.append('Access-Control-Allow-Origin', '*');
    head.append('Content-Type', 'application/json');
    head.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
    return head;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.check_authenticate().subscribe(
      response => {
        this.auth_check = response;
        this.status = this.auth_check.STATUS;
        console.log('Authentication service ' + this.status )
        if (this.status === 'success') {
          localStorage.setItem('STATUS', 'true');
        } else {
          localStorage.setItem('STATUS', 'false');
        }
      }
    );
    if (localStorage.getItem('STATUS') === 'true') {
          // logged in
          return true;
        }
        // not logged in so redirect to login page with the return url
        this._route.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
  }
  check_authenticate(): Observable<any> {
    let head = this.getHeader();
    return this._http.get(`${this.url}/auth/authenticate/`, {headers: head})
    .map((response: Response) => {
      this.auth_json = response;
    });
  }
}

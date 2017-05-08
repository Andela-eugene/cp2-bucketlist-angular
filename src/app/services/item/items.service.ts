import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Items } from '../../interfaces/item.interface';

@Injectable()
export class ItemsService {
  url = 'http://127.0.0.1:5000';
  items_json
  items_array;

  constructor(private _http: Http, private _router: Router) { }

   getAllItems(bucket_id): Observable<Items[]> {
    let head = new Headers();
    head.append('Access-Control-Allow-Origin', '*');
    head.append('TOKEN', localStorage.getItem('TOKEN') );
    head.append('Content-Type', 'application/json');
    head.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
    return this._http.get(`${this.url}/api/v1/bucketlists/items/${bucket_id}`, { headers: head })
      .map((response: Response) => {
      console.log(response.json());
      this.items_json = response.json();
      this.items_array = this.items_json.bucketlists;
      return <Items[]> this.items_array;
    })
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

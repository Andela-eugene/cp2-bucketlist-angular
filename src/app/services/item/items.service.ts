import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Items } from '../../interfaces/item.interface';

@Injectable()
export class ItemsService {
  body: any;
  url = 'http://127.0.0.1:5000';
  items_json;
  items_array;

  getHeaders(): Headers {
    let head = new Headers();
    head.append('Access-Control-Allow-Origin', '*');
    head.append('TOKEN', localStorage.getItem('TOKEN') );
    head.append('Content-Type', 'application/json');
    head.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
    return head;
  }

  constructor(private _http: Http, private _router: Router) { }

   getAllItems(bucket_id): Observable<Items[]> {
     let head = this.getHeaders();
    return this._http.get(`${this.url}/api/v1/bucketlists/items/${bucket_id}`, { headers: head })
      .map((response: Response) => {
      this.items_json = response.json();
      this.items_array = this.items_json.bucketlist_item;
      console.log(this.items_array);
      return <Items[]> this.items_array;
    })
      .catch(this.handleError);
  }
  createItem(bucket_id, item_name, item_description): Observable<any> {
    this.body = JSON.stringify({
      'name': item_name,
      'description': item_description
    });
    let head = this.getHeaders();
    return this._http.post(`${this.url}/api/v1/bucketlists/${bucket_id}/items`, this.body, { headers: head })
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  updateItem(item_id, item_done, item_name, item_description): Observable<any> {
    this.body = JSON.stringify({
      'name': item_name,
      'description': item_description,
      'done': item_done
    });
    let head = this.getHeaders();
    return this._http.put(`${this.url}/api/v1/bucketlists/update-item/${item_id}`, this.body, {headers: head})
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  deleteItem(item_id) {
    let head = this.getHeaders();
    return this._http.delete(`${this.url}/api/v1/bucketlists/items/${item_id}`, { headers: head})
      .map((response: Response) => response.json())
      .do(data => console.log(data))
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

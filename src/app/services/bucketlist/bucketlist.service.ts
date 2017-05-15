import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Bucketlist } from '../../interfaces/bucketlist.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BucketlistService {
  body: any;
  url = 'http://127.0.0.1:5000';
  bucket_json;
  bucket_arry;
  page_response;

  constructor(private _http: Http, private _router: Router) {}
  getHeader(): Headers {
    let head = new Headers();
    head.append('Access-Control-Allow-Origin', '*');
    head.append('TOKEN', localStorage.getItem('TOKEN') );
    head.append('Content-Type', 'application/json');
    head.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
    return head;
  }

  getAllBucketlist(): Observable<Bucketlist[]> {
    let head = this.getHeader();
    return this._http.get(`${this.url}/api/v1/bucketlists/`, { headers: head })
      .map((response: Response) => {
      this.bucket_json = response.json();
      this.bucket_arry = this.bucket_json.bucketlists;
      return <Bucketlist[]> this.bucket_arry;
    })
      .catch(this.handleError);
  }

  getBucketByID(bucket_id): Observable<Bucketlist[]> {
    let head = this.getHeader();
    return this._http.get(`${this.url}/api/v1/bucketlists/${bucket_id}`, { headers: head })
    .map((response: Response) => {
      this.bucket_json = response.json();
      this.bucket_arry = this.bucket_json.bucketlists;
      return <Bucketlist[]> this.bucket_arry;
    })
      .catch(this.handleError);
  }
  updateBucketlist(bucket_id, bucket_name): Observable<any> {
    let head = this.getHeader();
    this.body = JSON.stringify({
      'name': bucket_name
    });
    return this._http.put(`${this.url}/api/v1/bucketlists/${bucket_id}`, this.body, { headers: head })
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  createBucket(bucket_name): Observable<any> {
    this.body = JSON.stringify({
      'name': bucket_name
    });
    let head = this.getHeader();
    return this._http.post(`${this.url}/api/v1/bucketlists/`, this.body, { headers: head })
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  deleteBucket(bucket_id): Observable<any> {
    let head = this.getHeader();
    return this._http.delete(`${this.url}/api/v1/bucketlists/${bucket_id}`, { headers: head })
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  searchBucketlist(search_value): Observable<any> {
    let head = this.getHeader();
    return this._http.get(`${this.url}/api/v1/search/${search_value}`, { headers: head })
      .map((response: Response) => response.json().SEARCH)
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  getPagedBucketlist(page_number): Observable<any> {
     let head = this.getHeader();
    return this._http.get(`${this.url}/api/v1/bucketlists/?limit=${page_number}`, { headers: head })
      .map((response: Response) => {
      this.page_response = response.json();
      return this.page_response;
    })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    if (error.status === 404) {
      this._router.navigate(['/404']);
    } else if (error.status === 401) {
      this._router.navigate(['/401']);
    } else if (error.status === 500) {
      this._router.navigate(['/500']);
    }
    return Observable.throw(message);
  }
}

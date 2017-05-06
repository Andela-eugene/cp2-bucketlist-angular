import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.css']
})
export class ErrorPagesComponent implements OnInit {
  page_not_found_title = 'Page Not Found';
  page_not_found = 'Sorry, but the page you were trying to view does not exist.';
  no_permissions_title = 'Not Allowed';
  no_permissions = 'You dont have the permission to view this page.';
  server_error_title = 'Something went wrong :(';
  server_error = 'Sorry, but something went wrong with the server.';
  page_title: string;
  page_message: string;
  errorCode: number;
  constructor() { }

  ngOnInit() {
  }
  pageNotFound(errorCode) {
    this.errorCode = errorCode;
    this.page_title = this.page_not_found_title;
    this.page_message = this.page_not_found;
  }
  unauthorized(errorCode) {
    this.errorCode = errorCode;
    this.page_title = this.no_permissions_title;
    this.page_message = this.no_permissions;
  }
  serverError() {
    this.page_title = this.server_error_title;
    this.page_message = this.server_error;
  }
}

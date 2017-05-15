/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 401Component } from './Unauthorised.component';

describe('401Component', () => {
  let component: 401Component;
  let fixture: ComponentFixture<401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitleLandingComponent } from './title-landing.component';

describe('TitleLandingComponent', () => {
  let component: TitleLandingComponent;
  let fixture: ComponentFixture<TitleLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

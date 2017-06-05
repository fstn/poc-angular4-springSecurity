"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var landing_component_1 = require('./landing.component');
describe('LandingComponent', function () {
  var component;
  var fixture;
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [ landing_component_1.LandingComponent ]
    })
      .compileComponents();
  }));
  beforeEach(function () {
    fixture = testing_1.TestBed.createComponent(landing_component_1.LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', function () {
    expect(component).toBeTruthy();
  });
});

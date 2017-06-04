/* tslint:disable:no-unused-variable */

import {User} from "../models/user";
import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentUserService } from './current-user.service';

describe('CurrentUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserService]
    });
  });

  it('should ...', inject([CurrentUserService], (service: CurrentUserService) => {
    expect(service).toBeTruthy();
  }));

  it('isAdmin should return true if user is an admin', inject([CurrentUserService], (service: CurrentUserService) => {
    let role: Array<string> = ["ROLE_ADMIN"];
    service.user = new User("test",role,"token");
    expect(service.isAdmin()).toBeTruthy();
  }));

  it('isAdmin should return false if user is an admin', inject([CurrentUserService], (service: CurrentUserService) => {
    let role: Array<string> = ["ROLE_USER"];
    service.user = new User("test",role,"token");
    expect(service.isAdmin()).toBeFalsy();
  }));
});

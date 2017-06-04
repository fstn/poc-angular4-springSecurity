import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../../services/authentication.service";

/**
 * Mock login component
 * This will be a mock.
 * login page has two inputs and a submit button
 * action will lead to a list view (see below)
 * login form fields in lg have 4 columns and are centered
 * on xs they have 100% width
 */
@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {
    username:"user",
    password:"password"
  };
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['doctors']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}

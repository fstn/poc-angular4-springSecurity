"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var user_1 = require("../models/user");
/**
 * Authentication service is used to login and logout of the application using JWT
 */
var AuthenticationService = (function () {
    function AuthenticationService(http, currentUser) {
        this.http = http;
        this.currentUser = currentUser;
        if (currentUser.user) {
            this.token = currentUser.user.token;
        }
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.http.post('/back/login', { username: username, password: password })
                .subscribe(function (response) {
                // login successful if there's a jwt token in the response
                var token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    _this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    var jwtHelper = new angular2_jwt_1.JwtHelper();
                    var clearToken = jwtHelper.decodeToken(token);
                    _this.currentUser.user = new user_1.User(username, JSON.parse(clearToken.roles), token);
                    observer.next(true);
                }
                else {
                    observer.next(false);
                }
                observer.complete();
            }, function (error) {
                if (error.status == 401) {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

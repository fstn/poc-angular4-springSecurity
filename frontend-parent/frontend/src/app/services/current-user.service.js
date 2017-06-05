"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_1 = require("../models/user");
/**
 * Service that will stock current user
 */
var CurrentUserService = (function () {
    function CurrentUserService() {
        this.CURRENT_USER_KEY = 'currentUser';
        var jsonUser = JSON.parse(localStorage.getItem(this.CURRENT_USER_KEY));
        if (jsonUser != null) {
            this._user = new user_1.User(jsonUser._username, jsonUser._roles, jsonUser._token);
        }
    }
    Object.defineProperty(CurrentUserService.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
            localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    CurrentUserService.prototype.isAdmin = function () {
        if (this.user != null) {
            return this.user.roles.some(function (x) { return x === "ROLE_ADMIN"; });
        }
        else {
            return false;
        }
    };
    CurrentUserService = __decorate([
        core_1.Injectable()
    ], CurrentUserService);
    return CurrentUserService;
}());
exports.CurrentUserService = CurrentUserService;

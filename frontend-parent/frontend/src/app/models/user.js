"use strict";
/**
 * Created by stephen on 03/06/2017.
 * User model class
 */
var User = (function () {
    function User(username, role, token) {
        this._username = username;
        this._roles = role;
        this._token = token;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        set: function (value) {
            this._roles = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;

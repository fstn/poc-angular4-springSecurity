"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
/**
 * Docker Service provide method to consume doctor's rest API
 */
var DoctorsService = (function () {
    function DoctorsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    DoctorsService.prototype.getAll = function () {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        // get users from api
        return this.http.get('/back/doctors', options)
            .map(function (response) { return response.json(); });
    };
    DoctorsService.prototype.add = function (doctor) {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new http_1.RequestOptions({ headers: headers });
        // get users from api
        return this.http.post('/back/doctors', { name: doctor.name, number: doctor.number }, options)
            .map(function (response) { return response.json(); });
    };
    DoctorsService = __decorate([
        core_1.Injectable()
    ], DoctorsService);
    return DoctorsService;
}());
exports.DoctorsService = DoctorsService;

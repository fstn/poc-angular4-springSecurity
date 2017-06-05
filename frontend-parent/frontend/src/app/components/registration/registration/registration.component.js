"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Registration component
 this will be a form with various input fields
 first name
 family name
 date of birth
 password
 e-mail
 all field are required
 registration shall only pass, when all field are filled
 date of birth needs a custom validation
 has to be a valid date
 user has to be older then 18 years
 after passing, you should go to login screen
 */
var RegistrationComponent = (function () {
    function RegistrationComponent(router) {
        this.router = router;
        this._model = {
            firstName: '',
            familyName: '',
            birthday: '',
            password: '',
            email: ''
        };
        var today = new Date();
        var minAge = 18;
        this._minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.addUser = function () {
        alert("User added (fake)");
        this.router.navigate(['login']);
    };
    Object.defineProperty(RegistrationComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            this._minDate = value;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;

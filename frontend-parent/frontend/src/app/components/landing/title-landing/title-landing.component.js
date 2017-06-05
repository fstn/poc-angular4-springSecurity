"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Landing page title
 */
var TitleLandingComponent = (function () {
    function TitleLandingComponent() {
    }
    TitleLandingComponent.prototype.ngOnInit = function () {
    };
    TitleLandingComponent = __decorate([
        core_1.Component({
            selector: 'app-title-landing',
            templateUrl: './title-landing.component.html',
            styleUrls: ['./title-landing.component.css']
        })
    ], TitleLandingComponent);
    return TitleLandingComponent;
}());
exports.TitleLandingComponent = TitleLandingComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Text part of landing page
 */
var TextLandingComponent = (function () {
    function TextLandingComponent() {
    }
    TextLandingComponent.prototype.ngOnInit = function () {
    };
    TextLandingComponent = __decorate([
        core_1.Component({
            selector: 'app-text-landing',
            templateUrl: './text-landing.component.html',
            styleUrls: ['./text-landing.component.css']
        })
    ], TextLandingComponent);
    return TextLandingComponent;
}());
exports.TextLandingComponent = TextLandingComponent;

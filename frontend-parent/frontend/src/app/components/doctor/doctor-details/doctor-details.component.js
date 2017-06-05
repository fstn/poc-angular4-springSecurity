"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Doctor details components
 */
var DoctorDetailsComponent = (function () {
    function DoctorDetailsComponent(selectedDoctor, router) {
        this.selectedDoctor = selectedDoctor;
        this.router = router;
        this._showMore = false;
    }
    DoctorDetailsComponent.prototype.ngOnInit = function () {
        this._doctor = this.selectedDoctor.doctor;
        if (this._doctor == null || !this._doctor.name || !this._doctor.number) {
            this.router.navigate(['doctors']);
        }
    };
    Object.defineProperty(DoctorDetailsComponent.prototype, "doctor", {
        get: function () {
            return this._doctor;
        },
        set: function (value) {
            this._doctor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorDetailsComponent.prototype, "showMore", {
        get: function () {
            return this._showMore;
        },
        set: function (value) {
            this._showMore = value;
        },
        enumerable: true,
        configurable: true
    });
    DoctorDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor-details',
            templateUrl: './doctor-details.component.html',
            styleUrls: ['./doctor-details.component.css']
        })
    ], DoctorDetailsComponent);
    return DoctorDetailsComponent;
}());
exports.DoctorDetailsComponent = DoctorDetailsComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Component that represent a list of doctors
 * get a result list from a server (use a open api to get a json)
 * order list by name
 * by clicking a list item, details page is opened
 * list view items containing:  image, name, number
 */
var DoctorListComponent = (function () {
    function DoctorListComponent(doctorsService, selectedDoctorService, router) {
        this.doctorsService = doctorsService;
        this.selectedDoctorService = selectedDoctorService;
        this.router = router;
        this._doctors = [];
        this._order = 'name';
        this._reverse = false;
    }
    DoctorListComponent.prototype.refresh = function () {
        var _this = this;
        // get users from secure api end point
        this.doctorsService.getAll()
            .subscribe(function (doctors) {
            _this._doctors = doctors;
        });
    };
    DoctorListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    DoctorListComponent.prototype.selectDoctor = function (selectedDoctor) {
        this.selectedDoctorService.doctor = selectedDoctor;
        this.router.navigate(['doctor-details']);
    };
    DoctorListComponent.prototype.setOrder = function (value) {
        if (this._order === value) {
            this._reverse = !this._reverse;
        }
        this._order = value;
    };
    Object.defineProperty(DoctorListComponent.prototype, "doctors", {
        get: function () {
            return this._doctors;
        },
        set: function (value) {
            this._doctors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorListComponent.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorListComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (value) {
            this._reverse = value;
        },
        enumerable: true,
        configurable: true
    });
    DoctorListComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor-list',
            templateUrl: './doctor-list.component.html',
            styleUrls: ['./doctor-list.component.css']
        })
    ], DoctorListComponent);
    return DoctorListComponent;
}());
exports.DoctorListComponent = DoctorListComponent;

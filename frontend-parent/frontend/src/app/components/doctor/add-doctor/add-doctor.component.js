"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var doctor_1 = require("../../../models/doctor");
/**
 * Component that allow to add doctor
 */
var AddDoctorComponent = (function () {
    function AddDoctorComponent(doctors, currentUser) {
        this.doctors = doctors;
        this.currentUser = currentUser;
        this.onAddNewDoctor = new core_1.EventEmitter();
        this._model = new doctor_1.Doctor("", "");
    }
    AddDoctorComponent.prototype.addDoctor = function () {
        var _this = this;
        this.doctors.add(this._model)
            .subscribe(function (result) {
            _this.onAddNewDoctor.emit();
        });
    };
    AddDoctorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AddDoctorComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output()
    ], AddDoctorComponent.prototype, "onAddNewDoctor", void 0);
    AddDoctorComponent = __decorate([
        core_1.Component({
            selector: 'app-add-doctor',
            templateUrl: './add-doctor.component.html',
            styleUrls: ['./add-doctor.component.css']
        })
    ], AddDoctorComponent);
    return AddDoctorComponent;
}());
exports.AddDoctorComponent = AddDoctorComponent;

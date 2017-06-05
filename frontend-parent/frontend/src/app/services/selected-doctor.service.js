"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var doctor_1 = require("../models/doctor");
/**
 * Selected doctor service,
 * Store selected doctor to get it in all components
 */
var SelectedDoctorService = (function () {
    function SelectedDoctorService() {
        this.SELECTED_DOCTOR_KEY = "selectedDoctor";
        var jsonDoctor = JSON.parse(localStorage.getItem(this.SELECTED_DOCTOR_KEY));
        if (jsonDoctor != null) {
            this._doctor = new doctor_1.Doctor(jsonDoctor.name, jsonDoctor.number);
        }
    }
    Object.defineProperty(SelectedDoctorService.prototype, "doctor", {
        get: function () {
            return this._doctor;
        },
        set: function (value) {
            this._doctor = value;
            localStorage.setItem(this.SELECTED_DOCTOR_KEY, JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    SelectedDoctorService = __decorate([
        core_1.Injectable()
    ], SelectedDoctorService);
    return SelectedDoctorService;
}());
exports.SelectedDoctorService = SelectedDoctorService;

"use strict";
/**
 * Doctor model class
 * Created by stephen on 03/06/2017.
 */
var Doctor = (function () {
    function Doctor(name, number) {
        this._name = name;
        this._number = number;
    }
    Object.defineProperty(Doctor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: true,
        configurable: true
    });
    return Doctor;
}());
exports.Doctor = Doctor;

"use strict";
/**
 * Route configuration for app
 * Created by stephen on 03/06/2017.
 */
var router_1 = require('@angular/router');
var home_component_1 = require("./components/doctor-home/home.component");
var auth_guard_1 = require("./guards/auth.guard");
var landing_component_1 = require("./components/landing/landing/landing.component");
var login_component_1 = require("./components/login/login/login.component");
var registration_component_1 = require("./components/registration/registration/registration.component");
var doctor_details_component_1 = require("./components/doctor/doctor-details/doctor-details.component");
var appRoutes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'doctors', component: home_component_1.DoctorComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'doctor-details', component: doctor_details_component_1.DoctorDetailsComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var auth_guard_1 = require("./guards/auth.guard");
var authentication_service_1 = require("./services/authentication.service");
var doctors_service_1 = require("./services/doctors.service");
var current_user_service_1 = require("./services/current-user.service");
var login_component_1 = require("./components/login/login/login.component");
var add_doctor_component_1 = require("./components/doctor/add-doctor/add-doctor.component");
var doctor_list_component_1 = require("./components/doctor/doctor-list/doctor-list.component");
var login_result_component_1 = require("./components/login/login-result/login-result.component");
var landing_component_1 = require("./components/landing/landing/landing.component");
var text_landing_component_1 = require("./components/landing/text-landing/text-landing.component");
var image_landing_component_1 = require("./components/landing/image-landing/image-landing.component");
var title_landing_component_1 = require("./components/landing/title-landing/title-landing.component");
var article_landing_component_1 = require("./components/landing/article-landing/article-landing.component");
var banner_landing_component_1 = require('./components/landing/banner-landing/banner-landing.component');
var registration_component_1 = require('./components/registration/registration/registration.component');
var doctor_details_component_1 = require('./components/doctor/doctor-details/doctor-details.component');
var selected_doctor_service_1 = require("./services/selected-doctor.service");
var ng2_order_pipe_1 = require('ng2-order-pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.DoctorComponent,
                login_component_1.LoginComponent,
                add_doctor_component_1.AddDoctorComponent,
                doctor_list_component_1.DoctorListComponent,
                login_result_component_1.LoginResultComponent,
                landing_component_1.LandingComponent,
                text_landing_component_1.TextLandingComponent,
                image_landing_component_1.ImageLandingComponent,
                title_landing_component_1.TitleLandingComponent,
                article_landing_component_1.ArticleLandingComponent,
                banner_landing_component_1.BannerLandingComponent,
                registration_component_1.RegistrationComponent,
                doctor_details_component_1.DoctorDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng2_order_pipe_1.Ng2OrderModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            providers: [
                auth_guard_1.AuthGuard,
                authentication_service_1.AuthenticationService,
                doctors_service_1.DoctorsService,
                current_user_service_1.CurrentUserService,
                selected_doctor_service_1.SelectedDoctorService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

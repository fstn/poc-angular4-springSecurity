import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {DoctorComponent} from "./components/doctor-home/doctor-home.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {DoctorsService} from "./services/doctors.service";
import {CurrentUserService} from "./services/current-user.service";
import {LoginComponent} from "./components/login/login/login.component";
import {AddDoctorComponent} from "./components/doctor/add-doctor/add-doctor.component";
import {DoctorListComponent} from "./components/doctor/doctor-list/doctor-list.component";
import {LoginResultComponent} from "./components/login/login-result/login-result.component";
import {LandingComponent} from "./components/landing/landing/landing.component";
import {TextLandingComponent} from "./components/landing/text-landing/text-landing.component";
import {ImageLandingComponent} from "./components/landing/image-landing/image-landing.component";
import {TitleLandingComponent} from "./components/landing/title-landing/title-landing.component";
import {ArticleLandingComponent} from "./components/landing/article-landing/article-landing.component";
import {BannerLandingComponent} from "./components/landing/banner-landing/banner-landing.component";
import {RegistrationComponent} from "./components/registration/registration/registration.component";
import {DoctorDetailsComponent} from "./components/doctor/doctor-details/doctor-details.component";
import {SelectedDoctorService} from "./services/selected-doctor.service";
import {Ng2OrderModule} from "ng2-order-pipe";

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    LoginComponent,
    AddDoctorComponent,
    DoctorListComponent,
    LoginResultComponent,
    LandingComponent,
    TextLandingComponent,
    ImageLandingComponent,
    TitleLandingComponent,
    ArticleLandingComponent,
    BannerLandingComponent,
    RegistrationComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    DoctorsService,
    CurrentUserService,
    SelectedDoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

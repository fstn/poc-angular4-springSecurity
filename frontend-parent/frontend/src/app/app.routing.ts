/**
 * Route configuration for app
 * Created by stephen on 03/06/2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {DoctorComponent} from "./components/doctor-home/doctor-home.component";
import {AuthGuard} from "./guards/auth.guard";
import {LandingComponent} from "./components/landing/landing/landing.component";
import {LoginComponent} from "./components/login/login/login.component";
import {RegistrationComponent} from "./components/registration/registration/registration.component";
import {DoctorDetailsComponent} from "./components/doctor/doctor-details/doctor-details.component";


const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'doctors', component: DoctorComponent, canActivate: [AuthGuard]},
  {path: 'doctor-details', component: DoctorDetailsComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);

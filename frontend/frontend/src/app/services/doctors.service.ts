import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Doctor} from "../models/doctor";

/**
 * Docker Service provide method to consume doctor's rest API
 */
@Injectable()
export class DoctorsService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getAll(): Observable<Doctor[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('http://127.0.0.1:8080/doctors', options)
      .map((response: Response) => response.json());
  }

  add(doctor: Doctor): Observable<Doctor[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.post('http://127.0.0.1:8080/doctors', {name:doctor.name,number:doctor.number}, options)
      .map((response: Response) => response.json());
  }
}

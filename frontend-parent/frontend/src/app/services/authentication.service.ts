import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {JwtHelper} from "angular2-jwt";
import {CurrentUserService} from "./current-user.service";
import {User} from "../models/user";

/**
 * Authentication service is used to login and logout of the application using JWT
 */
@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http, private currentUser: CurrentUserService) {
    if (currentUser.user) {
      this.token = currentUser.user.token;
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post('/back/login', JSON.stringify({username: username, password: password}))
        .subscribe((response: Response) => {
          // login successful if there's a jwt token in the response
          let token = response.json() && response.json().token;
          if (token) {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            let jwtHelper: JwtHelper = new JwtHelper();

            let clearToken = jwtHelper.decodeToken(token);

            this.currentUser.user = new User(username, JSON.parse(clearToken.roles), token);
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        }, (error: any) => {
          if (error.status == 401) {
            observer.next(false);
            observer.complete();
          }
        })
    });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}


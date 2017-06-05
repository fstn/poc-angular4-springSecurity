import {Injectable} from "@angular/core";
import {User} from "../models/user";

/**
 * Service that will stock current user
 */
@Injectable()
export class CurrentUserService {

  private _user: User;
  private CURRENT_USER_KEY = 'currentUser';

  constructor() {
    let jsonUser: any = JSON.parse(localStorage.getItem(this.CURRENT_USER_KEY));
    if (jsonUser != null) {
      this._user = new User(jsonUser._username, jsonUser._roles, jsonUser._token)
    }
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(value));
  }

  public isAdmin() {
    if (this.user != null) {
      return this.user.roles.some(x => x === "ROLE_ADMIN")
    } else {
      return false;
    }
  }

}

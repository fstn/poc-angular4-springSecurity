/**
 * Created by stephen on 03/06/2017.
 * User model class
 */
export class User {
  private _username: string;
  private _roles: Array<string>;
  private _token: any;


  constructor(username: string, role: Array<string>, token: any) {
    this._username = username;
    this._roles = role;
    this._token = token;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get roles(): Array<string> {
    return this._roles;
  }

  set roles(value: Array<string>) {
    this._roles = value;
  }

  get token(): any {
    return this._token;
  }

  set token(value: any) {
    this._token = value;
  }
}

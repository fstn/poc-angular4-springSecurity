/**
 * Doctor model class
 * Created by stephen on 03/06/2017.
 */
export class Doctor {
  private _name: string;
  private _number: string;


  constructor(name: string, number: string) {
    this._name = name;
    this._number = number;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }
}

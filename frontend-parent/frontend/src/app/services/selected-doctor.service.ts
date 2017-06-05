import {Injectable} from "@angular/core";
import {Doctor} from "../models/doctor";

/**
 * Selected doctor service,
 * Store selected doctor to get it in all components
 */
@Injectable()
export class SelectedDoctorService {

  private _doctor: Doctor;
  private SELECTED_DOCTOR_KEY: string = "selectedDoctor";

  constructor() {
    let jsonDoctor: any = JSON.parse(localStorage.getItem(this.SELECTED_DOCTOR_KEY));
    if (jsonDoctor != null) {
      this._doctor = new Doctor(jsonDoctor.name, jsonDoctor.number);
    }
  }

  get doctor(): Doctor {
    return this._doctor;
  }

  set doctor(value: Doctor) {
    this._doctor = value;
    localStorage.setItem(this.SELECTED_DOCTOR_KEY, JSON.stringify(value));
  }
}

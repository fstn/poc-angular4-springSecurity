import {Component, OnInit} from "@angular/core";
import {Doctor} from "../../../models/doctor";
import {SelectedDoctorService} from "../../../services/selected-doctor.service";
import {Router} from "@angular/router";

/**
 * Doctor details components
 */
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  private _doctor: Doctor;
  private _showMore: boolean = false;

  constructor(private selectedDoctor: SelectedDoctorService,
              private router: Router) {
  }

  ngOnInit() {
    this._doctor = this.selectedDoctor.doctor;
    if (this._doctor == null || !this._doctor.name || !this._doctor.number) {
      this.router.navigate(['doctors']);
    }
  }

  get doctor(): Doctor {
    return this._doctor;
  }

  set doctor(value: Doctor) {
    this._doctor = value;
  }


  get showMore(): boolean {
    return this._showMore;
  }

  set showMore(value: boolean) {
    this._showMore = value;
  }
}

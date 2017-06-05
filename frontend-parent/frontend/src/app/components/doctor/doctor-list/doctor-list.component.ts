import {Component, OnInit} from "@angular/core";
import {DoctorsService} from "../../../services/doctors.service";
import {Doctor} from "../../../models/doctor";
import {SelectedDoctorService} from "../../../services/selected-doctor.service";
import {Router} from "@angular/router";

/**
 * Component that represent a list of doctors
 * get a result list from a server (use a open api to get a json)
 * order list by name
 * by clicking a list item, details page is opened
 * list view items containing:  image, name, number
 */
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  private _doctors: Doctor[] = [];
  private _order: string = 'name';
  private _reverse: boolean = false;

  constructor(private doctorsService: DoctorsService,
              private selectedDoctorService: SelectedDoctorService,
              private router: Router) {
  }

  public refresh() {
    // get users from secure api end point
    this.doctorsService.getAll()
      .subscribe(doctors => {
        this._doctors = doctors;
      });
  }

  ngOnInit(): void {
    this.refresh();
  }

  private selectDoctor(selectedDoctor: Doctor) {
    this.selectedDoctorService.doctor = selectedDoctor;
    this.router.navigate(['doctor-details']);
  }

  private setOrder(value) {
    if (this._order === value) {
      this._reverse = !this._reverse;
    }
    this._order = value;

  }

  get doctors(): Doctor[] {
    return this._doctors;
  }

  set doctors(value: Doctor[]) {
    this._doctors = value;
  }

  get order(): string {
    return this._order;
  }

  set order(value: string) {
    this._order = value;
  }

  get reverse(): boolean {
    return this._reverse;
  }

  set reverse(value: boolean) {
    this._reverse = value;
  }
}

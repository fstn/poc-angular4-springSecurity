import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {Doctor} from "../../../models/doctor";
import {DoctorsService} from "../../../services/doctors.service";
import {CurrentUserService} from "../../../services/current-user.service";

/**
 * Component that allow to add doctor
 */
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  @Output() onAddNewDoctor: EventEmitter<any> = new EventEmitter();

  private _model: Doctor = new Doctor("", "");

  constructor(private doctors: DoctorsService,
              private currentUser: CurrentUserService) {
  }

  addDoctor() {
    this.doctors.add(this._model)
      .subscribe(result => {
        this.onAddNewDoctor.emit();
      });
  }

  ngOnInit() {
  }

  get model(): Doctor {
    return this._model;
  }

  set model(value: Doctor) {
    this._model = value;
  }
}

import { Component, OnInit } from '@angular/core';
import {DoctorsService} from "../../services/doctors.service";
import {Doctor} from "../../models/doctor";


@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

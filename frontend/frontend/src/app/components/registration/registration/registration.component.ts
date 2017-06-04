import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

/**
 * Registration component
 this will be a form with various input fields
 first name
 family name
 date of birth
 password
 e-mail
 all field are required
 registration shall only pass, when all field are filled
 date of birth needs a custom validation
 has to be a valid date
 user has to be older then 18 years
 after passing, you should go to login screen
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private minDate: Date;

  constructor(private router: Router) {
    let today: Date = new Date();
    let minAge: number = 18;
    this.minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  }

  ngOnInit() {
  }

  private addUser() {
    alert("User added (fake)");
    this.router.navigate(['login']);
  }
}

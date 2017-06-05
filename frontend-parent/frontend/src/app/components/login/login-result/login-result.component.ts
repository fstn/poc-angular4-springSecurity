import {Component, OnInit} from "@angular/core";
import {CurrentUserService} from "../../../services/current-user.service";

/**
 * Login result component
 */
@Component({
  selector: 'app-login-result',
  templateUrl: './login-result.component.html',
  styleUrls: ['./login-result.component.css']
})
export class LoginResultComponent implements OnInit {

  //noinspection JSUnusedLocalSymbols
  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
  }

}

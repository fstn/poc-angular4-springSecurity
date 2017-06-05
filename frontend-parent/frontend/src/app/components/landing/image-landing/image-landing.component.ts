import {Component, OnInit} from "@angular/core";

/**
 * Image part of landing page
 */
@Component({
  selector: 'app-image-landing',
  templateUrl: './image-landing.component.html',
  styleUrls: ['./image-landing.component.css']
})
export class ImageLandingComponent implements OnInit {

  private number: number;

  constructor() {
    this.number = Math.floor(Math.random() * 1000) + 1
  }

  ngOnInit() {
  }

}

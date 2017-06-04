import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-article-landing',
  templateUrl: './article-landing.component.html',
  styleUrls: ['./article-landing.component.css']
})
export class ArticleLandingComponent implements OnInit {

  @Input()
  reverse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, Input} from "@angular/core";

/**
 * Article part of landing apge
 */
@Component({
  selector: 'app-article-landing',
  templateUrl: './article-landing.component.html',
  styleUrls: ['./article-landing.component.css']
})
export class ArticleLandingComponent implements OnInit {

  @Input()
  reverse: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}

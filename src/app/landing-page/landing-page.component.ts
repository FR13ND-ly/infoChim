import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/data-access/article.model';
import { articles } from '../shared/data-access/articles';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  articles: Array<Article> = [...articles]

  ngOnInit(): void {
    console.log(this.articles)
  }

}

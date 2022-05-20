import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/data-access/article.model';
import { articles } from '../shared/data-access/articles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  articles : Array<Article> = [...articles]

  ngOnInit(): void {
  }

  onChangeTheme() {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', localStorage.getItem('theme') == 'dark' ? '' : 'dark')
  }

}

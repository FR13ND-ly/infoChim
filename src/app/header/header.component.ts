import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/data-access/article.model';
import { articles } from '../shared/data-access/articles';
import { HeaderSelectService } from '../shared/data-access/header-select.service';
import { UserService } from '../shared/data-access/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService : UserService, private headerSelectService : HeaderSelectService) { }

  user$ = this.userService.getUserUpdateListener()
  index$ = this.headerSelectService.getIndexUpdateListener()
  
  articles : Array<Article> = [...articles]

  ngOnInit(): void {
    this.userService.init()
  }

  onChangeTheme() {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', localStorage.getItem('theme') == 'dark' ? '' : 'dark')
  }

  onLogin() {
    this.userService.login()
  }

  onLogout() {
    this.userService.logout()
  }
}

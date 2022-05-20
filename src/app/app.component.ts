import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infoChim';

  ngOnInit() {
    this.reflectTheme()
  }

  reflectTheme() {
    document.body.classList.toggle('dark-theme', localStorage.getItem('theme') == 'dark')
  }
}

import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../shared/comments/data-access/comments.service';
import { HeaderSelectService } from '../shared/data-access/header-select.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private commentsService : CommentsService, private headerSelected : HeaderSelectService) { }

  ngOnInit(): void {
    this.onChange()
  }

  locations = [
    '/articol/definitie',
    '/articol/clasificare',
    '/articol/nomenclatura',
    '/articol/metode-de-obtinere',
    '/articol/proprietati-fizice',
    '/articol/proprietati-chimice',    
  ]

  onChange() {
    this.headerSelected.changeIndex(this.locations.indexOf(location.pathname))
    this.commentsService.init(location.pathname)
  }

}

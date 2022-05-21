import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-methods-of-obtaining',
  templateUrl: './methods-of-obtaining.component.html',
  styleUrls: ['./methods-of-obtaining.component.scss']
})
export class MethodsOfObtainingComponent implements OnInit {

  constructor(private titleService: Title) { }

  titles : any = []

  ngOnInit(): void {
    this.titleService.setTitle("Metode de obținere");
    this.titles = [
      {
        display : 'Metode Oxidative',
        el : document.querySelector('#oxi')
      },
      {
        display : 'Metode Hidrolitice',
        el : document.querySelector('#hydro')
      }
    ]
  }

}

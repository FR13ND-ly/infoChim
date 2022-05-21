import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  constructor() { }
  @Input() titles! : any

  view : number = 0
  observer : IntersectionObserver = new IntersectionObserver((el : any) => this.resolveEl(el), {threshold: .5})
  
  ngOnInit(): void {
    this.titles.forEach((element : any, i : number) => {
      this.observer.observe(element.el)
    });
  }

  getIndex(el : any) {
    this.titles.forEach((element : any, i : number) => {
      if (element.el == el.target) this.view = i
    });
  }

  resolveEl(entry : IntersectionObserverEntry[]) {
    if (entry[0].isIntersecting) {
      this.getIndex(entry[0]);
    }
  }

  onGoTo(el : HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block : "center"})
  }
}

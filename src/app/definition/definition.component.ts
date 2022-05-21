import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  constructor(private titleService: Title) { }

  R  = [
    {
      display: "",
      name: ""
    },
    {
      display: "H",
      name: "Acid Metanoic"
    },
    {
      display: "CH<sub>3</sub>",
      name: "Acid Etanoic"
    },
    {
      display: "C<sub>6</sub>H<sub>5</sub>",
      name: "Acid Benzoic"
    },
  ]
  i : number = 0;
  titles : any = []

  ngOnInit(): void {
    this.titleService.setTitle("Definiție");
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  constructor(private titleService: Title) { }

  elements : Array<any> = [
    {
      formula : "CH<sub>3</sub>-COOH",
      type1 : "Saturat",
      type2 : "Monocarboxilic",
      vertical : false
    },
    {
      formula : "HOOC-CH<sub>2</sub>-COOH",
      type1 : "Saturat",
      type2 : "Policarboxilic",
      vertical : false
    },
    {
      formula : 
      ` <span>COOH</span>
        <span class="formula__connector"></span>
        <span>COOH</span>`,
      type1 : "Saturat",
      type2 : "Policarboxilic",
      vertical : true
    },
    {
      formula : 
      ` <span>HC-COOH</span>
        <span class="formula__double-connector"></span>
        <span>HC-COOH</span>`,
      type1 : "Nesaturat",
      type2 : "Policarboxilic",
      vertical : true
    },
    {
      formula : "<span>HOOC-<img src='/assets/images/hexagon.svg' class='hex hex--lower'>-COOH</span>",
      type1 : "Aromatic",
      type2 : "Policarboxilic",
      vertical : false,
    },
    {
      formula : "H-COOH",
      type1 : "Saturat",
      type2 : "Monocarboxilic",
      vertical : false
    },
    {
      formula : "CH<sub>3</sub>-CH=CH-COOH",
      type1 : "Nesaturat",
      type2 : "Monocarboxilic",
      vertical : false
    },
    {
      formula : "<img src='/assets/images/hexagon.svg' class='hex'>-COOH",
      type1 : "Aromatic",
      type2 : "Monocarboxilic",
      vertical : false
    },
  ]

  titles : any = []

  ngOnInit(): void {
    this.titleService.setTitle("Clasificare");
    this.titles = [
      {
        display : 'Clasificare',
        el : document.querySelector('#classification')
      },
      {
        display : 'Exemple',
        el : document.querySelector('#exemples')
      }
    ]
  }
}

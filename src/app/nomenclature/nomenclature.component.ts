import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.scss']
})
export class NomenclatureComponent implements OnInit {

  constructor() { }

  elements : Array<any> = [
    {
      formula : "CH<sub>3</sub>-COOH",
      type1 : "Acid <span class='red'>Etan</span>oic",
      type2 : "Acid Acetic",
      vertical : false
    },
    {
      formula : "HOOC-CH<sub>2</sub>-COOH",
      type1 : "Acid <span class='blue'>Propan</span><span class='green'>di</span>oic",
      type2 : "Acid Malonic",
      vertical : false
    },
    {
      formula : 
      ` <span>COOH</span>
        <span class="formula__connector"></span>
        <span>COOH</span>`,
      type1 : "Acid <span class='blue'>Etan</span><span class='green'>di</span>oic",
      type2 : "Acid Oxalic",
      vertical : true
    },
    {
      formula : 
      ` <span>HC-COOH</span>
        <span class="formula__double-connector"></span>
        <span>HC-COOH</span>`,
      type1 : "Acid <span class='blue'>2 Buten</span><span class='green'>di</span>oic",
      type2 : "Acid Maleic",
      vertical : true
    },
    {
      formula : "<span>HOOC-<img src='/assets/images/hexagon.svg' class='hex hex--lower'>-COOH</span>",
      type1 : "Acid para <span class='blue'>benzen</span><span class='green'>di</span>oic",
      type2 : "Acid Tereftalic",
      vertical : false,
    },
    {
      formula : "H-COOH",
      type1 : "Acid <span class='blue'>Metan</span>oic",
      type2 : "Acid Formic",
      vertical : false
    },
    {
      formula : "CH<sub>2</sub>=CH-COOH",
      type1 : "Acid <span class='blue'>Propen</span>oic",
      type2 : "Acid Acrilic",
      vertical : false
    },
    {
      formula : "CH<sub>3</sub>=CH-COOH",
      type1 : "Acid <span class='blue'>Propan</span>oic",
      type2 : "Acid Propilic",
      vertical : false
    },
    {
      formula : "<img src='/assets/images/hexagon.svg' class='hex'>-COOH",
      type1 : "Acid <span class='blue'>Benz</span>oic",
      vertical : false
    },
    {
      formula : "CH<sub>3</sub>-CH=CH-COOH",
      type1 : "Acid <span class='blue'>2 Buten</span>oic",
      type2 : "Propilic",
      vertical : false
    },
  ]

  ngOnInit(): void {
  }

}

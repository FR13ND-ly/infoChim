import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-methods-of-obtaining',
  templateUrl: './methods-of-obtaining.component.html',
  styleUrls: ['./methods-of-obtaining.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MethodsOfObtainingComponent implements OnInit {

  constructor(private titleService: Title, public sanitizer: DomSanitizer) { }

  titles : any = []

  R: any = [
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="green">R-CH<sub>3</sub>+</span>
          <div class="fraction">
              <span>3</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          <span class="red">O</span><sub>2</sub>→
          <span class="blue">R-COOH</span>
          +H<sub>2</sub>O
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="green">CH<sub>3</sub>-CH<sub>3</sub>+</span>
          <div class="fraction">
              <span>3</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          <span class="red">O</span><sub>2</sub>→
          <span class="blue">CH<sub>3</sub>-COOH</span>
          +H<sub>2</sub>O
        </div>
        <p class="text">
            <span class="green">Etan</span>
            <span class="blue acid-1">Acid Etanoic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="purple">R-CH=CH<sub>2</sub></span>+5[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="blue">R-COOH</span>+<span class="purple">CO<sub>2</sub></span>+H<sub>2</sub>O
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="purple">CH<sub>3</sub>-CH=CH<sub>2</sub></span>+5[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="blue">CH<sub>3</sub>-COOH</span>+<span class="purple">CO<sub>2</sub></span>+H<sub>2</sub>O
        </div>
        <p class="text">
            <span class="purple">Propenă</span>
            <span class="blue acid-2">Acid acetic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula space-top">
          <span class="purple">R-CH=</span><span class="blue">CH-R'</span>+4[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="purple">R-COOH</span>+<span class="blue">R'-COOH</span>
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
            <span class="purple">CH<sub>3</sub>-CH=</span><span class="blue">CH-CH<sub>2</sub>-CH<sub>3</sub></span>+4[<span class="red">O</span>]
            <div class="equal">
                <span>KMnO<sub>4</sub></span>
                <span class="equal__arrow"></span>
                <span>H<sub>2</sub>SO<sub>4</sub></span>
            </div>
            <span class="purple">CH<sub>3</sub>-COOH</span>+<span class="blue">CH<sub>2</sub>-CH<sub>3</sub>-COOH</span>
        </div>
        <p class="text">
            <span class="purple acid-5">2-pentenă</span>
            <span class="purple acid-3">Acid Etanoic</span>
            <span class="blue acid-4">Acid Propanoic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="green">R-CH<sub>2</sub>-OH</span>+2[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="green">R-COOH</span>+H<sub>2</sub>O
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="green">CH<sub>3</sub>-OH</span>+2[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="green">H-COOH</span>+H<sub>2</sub>O
        </div>
        <p class="text green">
            <span>Metanol</span>
            <span class="acid-6">Acid Metanoic</span>
        </p>
        <div class="formula">
            <span class="green">CH<sub>3</sub>-CH<sub>2</sub>-OH</span>+2[<span class="red">O</span>]
            <div class="equal">
                <span>KMnO<sub>4</sub></span>
                <span class="equal__arrow"></span>
                <span>H<sub>2</sub>SO<sub>4</sub></span>
            </div>
            <span class="green">CH<sub>3</sub>-COOH</span>+H<sub>2</sub>O
        </div>
        <p class="text green">
            <span>Etanol</span>
            <span class="acid-7">Acid Etanoic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula space-top">
          <span class="green">R-</span><span class="green tree-3" el="R'">CH</span><span class="green">-OH</span>
          +4[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="green">R-COOH</span>+
          <span class="green">R'-COOH</span>+H<sub>2</sub>O
        </div>
        <div style="margin-top: 4rem;"></div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="green">CH<sub>3</sub>-CH<sub>2</sub>-</span><span class="green tree-3" el="OH">CH</span><span class="green">-CH<sub>3</sub></span>
          +4[<span class="red">O</span>]
          <div class="equal">
              <span>KMnO<sub>4</sub></span>
              <span class="equal__arrow"></span>
              <span>H<sub>2</sub>SO<sub>4</sub></span>
          </div>
          <span class="green">CH<sub>3</sub>-CH<sub>2</sub>-COOH</span>+
          <span class="green">H-COOH</span>+H<sub>2</sub>O
        </div>
        <p class="text green">
            <span class="butanol">2-Butanol</span>
            <span class="acid-8">Acid Propanoic</span>
            <span class="acid-9">Acid Metanoic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue">R</span>-C<span class="teal">X<sub>3</sub></span>+2
          <span class="red">H-OH</span>→<span class="blue">R-COOH</span>+3H<span class="teal">X</span>
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue">CH<sub>3</sub></span>-C<span class="teal">Cl<sub>3</sub></span>+2
          <span class="red">H-OH</span>→<span class="blue">CH<sub>3</sub>-COOH</span>+3H<span class="teal">Cl</span>
        </div>
        <p class="text blue">
            <span>1,1,1 tricloro-etan</span>
            <span class="acid-10">Acid Etanoic</span>
        </p>`)
      ],
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="lime">R-COO</span><span class="blue">R'</span>+<span class="red">H<sub>2</sub>O</span>
          ⇄<span class="lime">R-COOH</span>+<span class="blue">R'-OH</span>
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="lime">CH<sub>3</sub>-COO</span><span class="blue">CH<sub>3</sub></span>+<span class="red">H<sub>2</sub>O</span>
          ⇄<span class="lime">CH<sub>3</sub>-COOH</span>+<span class="blue">CH<sub>3</sub>-OH</span>
        </div>
        <p class="text">
            <span class="lime">Acetat de Metil</span>
            <span class="lime acid-11">Acid Metanoic</span>
            <span class="blue metanol">Metanol</span>
        </p>`)
      ],
      ex : 0
    }
  ]

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

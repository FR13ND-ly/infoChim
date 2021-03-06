import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-chemistry-properties',
  templateUrl: './chemistry-properties.component.html',
  styleUrls: ['./chemistry-properties.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChemistryPropertiesComponent implements OnInit {

  constructor(public dialog: MatDialog, private titleService: Title, public sanitizer: DomSanitizer) { }

  titles : any = []

  R: any = [
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          2<span class="feature">R</span>-COOH+Na<sub>2</sub>CO<sub>3</sub>→2<span class="feature">R</span>-CO<span class="negative-2">O</span>N<span class="positive">a</span>
          +CO<sub>2</sub>↑+H<sub>2</sub>O
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">CH<sub>3</sub></span>-COOH</span>+<span class="teal">NaHCO<sub>3</sub></span>→<span class="red"><span class="feature">CH<sub>3</sub></span>-CO<span class="negative-2">O</span>N<span class="positive">a</span><sub>4</sub></span>
          +CO<sub>2</sub>↑+H<sub>2</sub>O
        </div>
        <p class="text names">
            <span class="blue">Acid Acetic</span>
            <span class="teal bicarbonat">Bicarbonat de Sodiu</span>
            <span class="red acetat-4">Acetat de Sodiu</span>
        </p>`)
      ],
      video : "K8xfoUWuCfQ",
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          2<span class="feature">R</span>-COOH-CaCO<sub>3</sub>→(<span class="feature">R</span>-CO<span class="negative-2">O</span>)<sub>2</sub>C<span class="positive-2">a</span>
          +CO<sub>2</sub>↑+H<sub>2</sub>O
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
            <span class="green">2<span class="feature">CH<sub>3</sub></span>-COOH</span>+<span class="yellow">CaCO<sub>3</sub></span>→<span class="purple">(<span class="feature">CH<sub>3</sub></span>-CO<span class="negative-2">O</span>)<sub>2</sub>C<span class="positive-2">a</span></span>
            +CO<sub>2</sub>↑+H<sub>2</sub>O
          </div>
          <p class="text names">
              <span class="green">Acid Acetic</span>
              <span class="yellow carbonat">Carbonat de Calciu</span>
              <span class="purple acetat-3">Acetat de Calciu</span>
          </p>`)
      ],
      video : "spsaNMBtaF0",
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">R</span>-COOH</span>+<span class="red">Na</span>→<span class="green"><span class="feature">R</span>-CO<span class="negative-2">O</span>N<span class="positive">a</span></span>+
          <div class="fraction">
              <span>1</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          H<sub>2</sub>↑
        </div>
        <p class="text names green sare-1">Sare organică de natriu</p>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">CH<sub>3</sub></span>-COOH</span>+<span class="red">Na</span>→<span class="green"><span class="feature">CH<sub>3</sub></span>-CO<span class="negative-2">O</span>N<span class="positive">a</span></span>+
          <div class="fraction">
              <span>1</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          H<sub>2</sub>↑
        </div>
        <p class="text names"><span class="blue">Acid Acetic</span><span class="green acetat-2">Acetat de Sodiu</span></p>`)
      ],
      video : "aGaWwnMyKVE",
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">R</span>-COOH</span>+<span class="red">Na</span>→<span class="green"><span class="feature">R</span>-CO<span class="negative">O</span>N<span class="positive">a</span></span>+
          <div class="fraction">
              <span>1</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          H<sub>2</sub>↑
        </div>
        <p class="text names green sare-1">Sare organică de natriu</p>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">CH<sub>3</sub></span>-COOH</span>+<span class="red">Na</span>→<span class="green"><span class="feature">CH<sub>3</sub></span>-CO<span class="negative">O</span>N<span class="positive">a</span></span>+
          <div class="fraction">
              <span>1</span>
              <span class="fraction__divider"></span>
              <span>2</span>
          </div>
          H<sub>2</sub>↑
        </div>
        <p class="text"><span class="blue">Acid Acetic</span><span class="green acetat-2">Acetat de Sodiu</span></p>`)
      ],
      video : "aGaWwnMyKVE",
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">R</span>-COOH</span>+
          <span class="teal"><span class="feature-2">R'</span>-OH</span>→
          <span class="purple"><span class="feature">R</span>-COO<span class="feature-2">R'</span></span>
          +H<sub>2</sub>O
        </div>
        <p class="text names">
            <span class="blue">Acid Organic </span>
            <span class="teal alcool-2">Alcool </span>
            <span class="purple ester">Ester(sare organică)</span>
        </p>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">CH<sub>3</sub></span>-COOH</span>+<span class="teal"><span class="feature-2">C<sub>2</sub>H<sub>5</sub></span>-OH</span>→<span class="purple"><span class="feature">CH<sub>3</sub></span>-COO<span class="feature-2">C<sub>2</sub>H<sub>5</sub></span></span>+H<sub>2</sub>O
        </div>
        <p class="text names"><span class="blue">Acid Acetic</span><span class="teal alcool-1">Alcool Etilic</span><span class="purple acetat-1">Acetat de Etil</span></p>`)
      ],
      video : "id7Fve9cMIw",
      ex : 0
    },
    {
      reacts : [
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
          <span class="blue"><span class="feature">R</span>-COOH</span>+
          <span class="blue"><span class="feature-2">R'</span>-COOH</span>
          <div class="equal">
              <span>-H<sub>2</sub>O</span>
              <span class="equal__arrow"></span>
          </div>
          <span class="s-reaction red">
              <div><span class="feature">R</span></div>
              <div class="divider-1"></div>
              <div>C</div>
              <div class="divider-2"></div>
              <div>O</div>
          </span>
          <span class="red">-O-</span>
          <span class="s-reaction red">
              <div><span class="feature-2">R'</span></div>
              <div class="divider-1"></div>
              <div>C</div>
              <div class="divider-2"></div>
              <div>O</div>
          </span>
        </div>`),
        this.sanitizer.bypassSecurityTrustHtml(`<div class="formula">
            <span class="blue"><span class="feature">CH<sub>3</sub></span>-COOH</span>+
            <span class="blue"><span class="feature-2">CH<sub>3</sub></span>-COOH</span>
            <div class="equal">
                <span>-H<sub>2</sub>O</span>
                <span class="equal__arrow"></span>
            </div>
            <span class="s-reaction red">
                <div class="feature">CH<sub>3</sub></div>
                <div class="divider-1"></div>
                <div>C</div>
                <div class="divider-2"></div>
                <div>O</div>
            </span>
            <span class="red">-O-</span>
            <span class="s-reaction red">
                <div class="feature-2">CH<sub>3</sub></div>
                <div class="divider-1"></div>
                <div>C</div>
                <div class="divider-2"></div>
                <div>O</div>
            </span>
        </div>
        <p class="text names red anhidra">Anhidră Acetică</p>`)
      ],
      ex : 0
    },
  ]

  ngOnInit(): void {
    this.titleService.setTitle("Proprietăți Chimice");
    this.titles = [
      {
        display : 'Proprietăți comune',
        el : document.querySelector('#shared')
      },
      {
        display : 'Proprietăți specifice',
        el : document.querySelector('#spec')
      }
    ]
  }

  onOpenVideo(url : string) {
    this.dialog.open(VideoComponent, {
      data : { url }
    })
  }
}

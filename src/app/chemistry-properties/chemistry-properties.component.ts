import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-chemistry-properties',
  templateUrl: './chemistry-properties.component.html',
  styleUrls: ['./chemistry-properties.component.scss']
})
export class ChemistryPropertiesComponent implements OnInit {

  constructor(public dialog: MatDialog, private titleService: Title) { }

  titles : any = []

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

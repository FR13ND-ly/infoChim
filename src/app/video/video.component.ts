import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, public sanitizer: DomSanitizer) { }

  url! : any

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.data.url}`)
  }
}
